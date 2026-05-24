import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { ButtonVariant } from '../../../core/enums/button-variant.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  variant = input<ButtonVariant>(ButtonVariant.Primary);
  label = input<string>('');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
}
