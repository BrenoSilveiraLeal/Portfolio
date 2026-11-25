"""Gera os PDFs do currículo (public/curriculo-breno-silveira.pdf e public/resume-breno-silveira.pdf)
a partir das páginas /curriculo e /resume.

Uso (com o site rodando em `npm run dev`):
    pip install playwright && playwright install chromium
    python scripts/gerar_curriculo_pdf.py [http://localhost:5173]
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5173'
public = Path(__file__).resolve().parent.parent / 'public'
pages = {'/curriculo': 'curriculo-breno-silveira.pdf', '/resume': 'resume-breno-silveira.pdf'}

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    for path, name in pages.items():
        page.goto(f'{base}{path}', wait_until='networkidle')
        page.emulate_media(media='print')
        page.pdf(path=str(public / name), format='A4', print_background=True, prefer_css_page_size=True)
        print(f'PDF gerado em {public / name}')
    browser.close()
