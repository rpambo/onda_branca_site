import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radio-epodcast',
  imports: [CommonModule],
  templateUrl: './radio-epodcast.html',
  styleUrl: './radio-epodcast.css'
})
export class RadioEpodcast {
  @ViewChild('audioRef') audioElementRef!: ElementRef<HTMLAudioElement>;

  isPlaying: boolean = false;
  currentTime: number = 0;
  duration: number = 0;
  volume: number = 1;

  togglePlay() {
    const audio = this.audioElementRef.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  onTimeUpdate() {
    this.currentTime = this.audioElementRef.nativeElement.currentTime;
  }

  onSeek(event: any) {
    const newTime = event.target.value;
    this.audioElementRef.nativeElement.currentTime = newTime;
  }

  onMetadataLoaded() {
    this.duration = this.audioElementRef.nativeElement.duration;
  }

  onVolumeChange(event: any) {
    const volume = parseFloat(event.target.value);
    this.volume = volume;
    this.audioElementRef.nativeElement.volume = volume;
  }

  selectedTab: 'radio' | 'podcast' = 'radio';

  selectTab(tab: 'radio' | 'podcast') {
    this.selectedTab = tab;
  }
}
