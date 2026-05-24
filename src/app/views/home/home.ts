import { Component } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Button} from '../../shared/components/button/button';
import {ButtonVariant} from '../../core/enums/button-variant.enum';
import {MatIconModule} from '@angular/material/icon';

@Component({
	selector: 'app-home',
	imports: [
		FaIconComponent,
		Button,
		MatIconModule
	],
	templateUrl: './home.html',
	styleUrl: './home.scss',
	standalone: true
})
export class Home {

	protected readonly ButtonVariant = ButtonVariant;
}
