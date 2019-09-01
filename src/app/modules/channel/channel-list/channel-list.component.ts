import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/http';
import { ChannelService } from '@app/core/http/channel.service';
import { Channel } from '@app/core/models';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  channelList$: Observable<any>;

  constructor(
    private authService: AuthService,
    private channelService: ChannelService
  ) { }

  ngOnInit() {
    this.channelList$ = this.channelService.searchByUserId(this.authService.currentUser.id);
  }

  onClickDeleteChannel(e: Event, channel: Channel) {
    e.preventDefault();
    this.channelService.delete(channel);
  }

}
