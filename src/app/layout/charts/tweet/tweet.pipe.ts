// import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
//
// @Pipe({
//   name: 'tweet'
// })
// export class TweetPipe implements PipeTransform {
//
//   constructor(private sanitizer: DomSanitizer) {}
//
//   transform(tweet: object, args?: any): any {
//     //let text = this.sanitizer.sanitize(SecurityContext.NONE, tweet.text);
// let text = tweet.text
//     // // Replace screen names with links
//     // if (tweet.entities.user_mentions) {
//     //   tweet.entities.user_mentions.forEach(mention => {
//     //     text = text.replace(new RegExp(`@${mention.screen_name}`, 'gi'), `<a href="https://twitter.com/${mention.screen_name}" target="_blank">@${mention.screen_name}</a>`);
//     //   });
//     // }
//
//     // Replace links with clickable links
//     if (tweet.urls.url) {
//     console.log(tweet["urls"]["url"])
//
//         text = text.replace(tweet["urls"]["url"], `<a href="${tweet["urls"]["url"]}" target="_blank">${tweet["urls"]["url"]}</a>`);
//
//     }
//     //
//     // // Remove media urls since we display them
//     // if (tweet.entities.media) {
//     //   tweet.entities.media.forEach(url => {
//     //     text = text.replace(url.url, '');
//     //   });
//     // }
//
//     // Replace newline characters
//     //text = text.replace(/\n/gm, '<br />');
//
//     return this.sanitizer.bypassSecurityTrustHtml(text);
//   }
//
// }
