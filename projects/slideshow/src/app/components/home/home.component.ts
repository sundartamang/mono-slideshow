import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.initializeRevealJS();
  }

  private initializeRevealJS(): void {
    let deck = new Reveal(
      {
        plugins: [Markdown],
        loop: true,
      },
    );
    deck.initialize();
  }

}
