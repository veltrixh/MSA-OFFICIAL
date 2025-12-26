#!/usr/bin/env python3
import re
import os

# Change to the website directory
os.chdir('c:\\MSDCEVENT\\MSA_OFFICIAL-main\\MSA_OFFICIAL-main')

files = ['index.html', 'contact.html', 'event.html']

# Pattern for the old quad logo
old_pattern = r'<div class="logo-quad">\s*<div class="quad-blue"></div>\s*<div class="quad-green"></div>\s*<div class="quad-yellow"></div>\s*<div class="quad-red"></div>\s*</div>'

# New HTML with theme-aware icons
new_html = '''<img src="./assets/icon46.jpg" class="logo-icon light-mode" alt="MSDC logo light" style="display: block;">
        <img src="./assets/icon45.jpg" class="logo-icon dark-mode" alt="MSDC logo dark" style="display: none;">'''

for filename in files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the pattern
        updated_content = re.sub(old_pattern, new_html, content, flags=re.MULTILINE)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f'✓ Updated {filename}')
    except Exception as e:
        print(f'✗ Error updating {filename}: {e}')

print('Done!')
