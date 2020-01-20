/**
 *
 * Command --> Event
 *
 * Command(コマンド)
 * コマンドは、アプリに何かをするように指示するアクションです。
 * それらは通常、ボタンのクリックや何かの選択などの
 * ユーザーイベントによってトリガーされます。
 *
 * 命名規則
 * [発信源のコンテキスト] 動詞 エンティティ
 *
 * Examples
 * [User API] GetUser
 * [Product Page] AddItemToCart
 * [Dashboard Page] ArchiveProject
 *
 * Event(イベント)
 * イベントは既に発生したアクションであり
 * 今度はそれらに対応する必要があります。
 *
 * Examples
 * [User API] GetUserSuccess
 * [Project API] ProjectUpdateFailed
 * [User Details Page] PasswordChanged
 * [Project Stars Component] StarsUpdated
 *
 * まとめ
 * ユーザーによって起きるイベントはCommand
 * 既に発生したアクションに対する反応はEvent
 *
 * 参考
 * https://www.ngxs.io/concepts/actions#how-should-you-name-your-actions
 */

export namespace Todo {
  export class Add {
    static readonly type = '[Todo] AddTodo';
    constructor(public todo: string) {}
  }
}
