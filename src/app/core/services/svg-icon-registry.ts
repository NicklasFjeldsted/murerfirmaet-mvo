import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SvgIconRegistry {
  private readonly registry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  register(): void {
    const icons: Record<string, string> = {
      'phone':           'icon-phone.svg',
      'check-circle':    'icon-check-circle.svg',
      'shield':          'icon-shield.svg',
      'calendar':        'icon-calendar.svg',
      'location-pin':    'icon-location-pin.svg',
      'chat':            'icon-chat.svg',
      'document':        'icon-document.svg',
      'hammer':          'icon-hammer.svg',
      'upload':          'icon-upload.svg',
      'star':            'icon-star.svg',
      'menu':            'icon-menu.svg',
      'file-signature':  'icon-file-signature.svg',
    };

    for (const [name, path] of Object.entries(icons)) {
      this.registry.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(path),
      );
    }
  }
}

