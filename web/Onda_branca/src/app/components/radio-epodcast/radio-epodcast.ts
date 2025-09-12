import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radio-epodcast',
  imports: [CommonModule],
  templateUrl: './radio-epodcast.html',
  styleUrls: ['./radio-epodcast.css']
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

  rewind() {
  const audio = this.audioElementRef.nativeElement;
  audio.currentTime = Math.max(0, audio.currentTime - 10); // recua 10 segundos
}

forward() {
  const audio = this.audioElementRef.nativeElement;
  audio.currentTime = Math.min(this.duration, audio.currentTime + 10); // avança 10 segundos
}

stop() {
  const audio = this.audioElementRef.nativeElement;
  audio.pause();
  audio.currentTime = 0;
  this.isPlaying = false;
}

// Formata para mm:ss
formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${this.pad(minutes)}:${this.pad(seconds)}`;
}

pad(num: number): string {
  return num < 10 ? '0' + num : '' + num;
}

}
