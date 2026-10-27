#!/usr/bin/env python3
"""
TrajetsSensibles — générateur des IMAGES DE DÉMONSTRATION.

Ces images ne sont PAS des photographies de l'atelier : ce sont des
placeholders neutres, générés localement (aucune connexion nécessaire).
Elles permettent de voir la carte, la galerie et les fiches photo
fonctionner avant que les vraies images des participants arrivent.

Pour les remplacer : déposez simplement vos photographies dans le
dossier du participant sous le même nom de fichier (ou changez le champ
« fichier » dans donnees.js), puis supprimez ce script.

Usage : python3 _generer-images-demo.py
"""

import math
import os
import random

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 800
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

# (dossier, nom de fichier, teinte dominante de la vignette)
IMAGES = [
    ("participant-1", "fissure.jpg", (167, 139, 250)),
    ("participant-1", "vitrine.jpg", (167, 139, 250)),
    ("participant-1", "ombre.jpg", (167, 139, 250)),
    ("participant-1", "grille.jpg", (167, 139, 250)),
    ("participant-2", "flaque.jpg", (52, 211, 153)),
    ("participant-2", "linge.jpg", (52, 211, 153)),
    ("participant-2", "pigeons.jpg", (52, 211, 153)),
    ("participant-2", "seuil.jpg", (52, 211, 153)),
    ("participant-3", "neon.jpg", (103, 164, 250)),
    ("participant-3", "escalier.jpg", (103, 164, 250)),
    ("participant-3", "silence.jpg", (103, 164, 250)),
    ("participant-4", "banc.jpg", (241, 120, 170)),
    ("participant-4", "rideau.jpg", (241, 120, 170)),
    ("participant-4", "attente.jpg", (241, 120, 170)),
    ("participant-4", "graffiti.jpg", (241, 120, 170)),
    ("participant-5", "hasard.jpg", (232, 197, 71)),
    ("participant-5", "enseigne.jpg", (232, 197, 71)),
    ("participant-5", "pierre.jpg", (232, 197, 71)),
]


def background(rng, hue):
    """Dégradé sombre + formes floues, dans l'esprit nocturne du site."""
    base = Image.new("RGB", (W, H), (8, 8, 12))
    px = base.load()
    for y in range(H):
        for x in range(0, W, 4):
            d = math.hypot((x - W * 0.5) / W, (y - H * 0.42) / H)
            v = max(0.0, 1.0 - d * 1.7)
            r = int(10 + hue[0] * 0.10 * v)
            g = int(10 + hue[1] * 0.10 * v)
            b = int(14 + hue[2] * 0.12 * v)
            for k in range(4):
                if x + k < W:
                    px[x + k, y] = (r, g, b)
    overlay = Image.new("RGB", (W, H), (0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for _ in range(16):
        cx, cy = rng.randint(0, W), rng.randint(0, H)
        rx, ry = rng.randint(60, 420), rng.randint(40, 300)
        tint = tuple(min(255, int(c * rng.uniform(0.10, 0.34))) for c in hue)
        od.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=tint)
    overlay = overlay.filter(ImageFilter.GaussianBlur(70))
    img = Image.blend(base, Image.blend(base, overlay, 0.85), 0.9)

    # lignes suggestives (fissures, câbles, arêtes)
    lines = Image.new("RGB", (W, H), (0, 0, 0))
    ld = ImageDraw.Draw(lines)
    for _ in range(rng.randint(3, 7)):
        pts = [(rng.randint(-100, W + 100), rng.randint(-100, H + 100))]
        for _ in range(rng.randint(2, 5)):
            pts.append((pts[-1][0] + rng.randint(-320, 320), pts[-1][1] + rng.randint(-220, 220)))
        col = tuple(min(255, int(c * rng.uniform(0.25, 0.55))) for c in hue)
        ld.line(pts, fill=col, width=rng.randint(1, 4), joint="curve")
    lines = lines.filter(ImageFilter.GaussianBlur(1.2))
    img = Image.blend(img, Image.blend(img, lines, 0.55), 0.75)

    # grain
    noise = Image.effect_noise((W, H), 26).convert("L")
    img = Image.composite(Image.new("RGB", (W, H), (255, 255, 255)), img, noise.point(lambda v: int(v * 0.06)))
    return img.filter(ImageFilter.GaussianBlur(0.5))


def label(img, folder, filename):
    d = ImageDraw.Draw(img, "RGBA")
    f_small = ImageFont.truetype(FONT_BOLD, 26)
    f_tiny = ImageFont.truetype(FONT_REG, 22)
    d.rounded_rectangle([40, H - 130, 700, H - 40], radius=14, fill=(5, 5, 8, 165))
    d.text((62, H - 112), "IMAGE DE DÉMONSTRATION", font=f_small, fill=(240, 240, 245, 235))
    d.text((62, H - 78), f"{folder} · {filename}", font=f_tiny, fill=(170, 170, 185, 225))
    return img


def main():
    root = os.path.dirname(os.path.abspath(__file__))
    for folder, filename, hue in IMAGES:
        rng = random.Random(f"{folder}/{filename}")
        img = label(background(rng, hue), folder, filename)
        out = os.path.join(root, folder, filename)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        img.save(out, "JPEG", quality=86, optimize=True)
        print("écrit :", os.path.relpath(out, root))


if __name__ == "__main__":
    main()
