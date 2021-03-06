// Generated by https://quicktype.io

export interface YoutubeComments {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: string;
  snippet: ItemSnippet;
}

export enum ItemKind {
  YoutubeCommentThread = 'youtube#commentThread',
}

export interface ItemSnippet {
  videoId: VideoID;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface TopLevelComment {
  kind: TopLevelCommentKind;
  etag: string;
  id: string;
  snippet: TopLevelCommentSnippet;
}

export enum TopLevelCommentKind {
  YoutubeComment = 'youtube#comment',
}

export interface TopLevelCommentSnippet {
  videoId: VideoID;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelID;
  canRate: boolean;
  viewerRating: ViewerRating;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface AuthorChannelID {
  value: string;
}

export enum VideoID {
  Z2Ol5Qmvsg = 'Z2ol5_qmvsg',
}

export enum ViewerRating {
  None = 'none',
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
