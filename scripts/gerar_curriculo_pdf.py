"""Gera public/curriculo-breno-silveira.pdf a partir da página /curriculo.

Uso (com o site rodando em `npm run dev`):
    pip install playwright && playwright install chromium
    python scripts/gerar_curriculo_pdf.py [http://localhost:5173]
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5173'
out = Path(__file__).resolve().parent.parent / 'public' / 'curriculo-breno-silveira.pdf'

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(f'{base}/curriculo', wait_until='networkidle')
    page.emulate_media(media='print')
    page.pdf(path=str(out), format='A4', print_background=True, prefer_css_page_size=True)
    browser.close()

print(f'PDF gerado em {out}')
