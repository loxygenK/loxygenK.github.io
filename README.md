# loxygenk.github.io

**THIS REPOSITORY AND THE WEBSITE `loxygenK.github.io` IS NO LONGER MAINTAINED - このリポジトリと `loxygenK.github.io` はメンテナンスされていません**．

New repository: [loxygenK/f4n.dev](https://github.com/loxygenK/f4n.dev)

---

***Thank you very much to visiting the repository!***
嬉しくて胸がはちきれそうな思いです。

## これは何

　loxygen.k(フライさん)のポートフォリオサイトです。Reactを使用しています。

## ページ遷移の度にリダイレクトするんですけど

　GitHub Actionsだと、このポートフォリオに使用している **`react-router`がそのままだと正常に動作しません** 。正常に動かすために、一度 **`404.html`に飛ばして、そこで目的のページにリダイレクトさせています** 。

　`404.html`からのリダイレクトの処理は`react-router`が行っています。

　この処理に当たって、有志の方が作成されたスクリプトを使用させていただいています。詳しくは[`public/404.html`](https://github.com/loxygenK/loxygenK.github.io/public/404.html)と[`index.html`](https://github.com/loxygenK/loxygenK.github.io/public/index.html)をご参照ください。

## ソースコードの構成

技術力のない人が作りたいものに無理やり似せていったのですごいコードになっているかもしれません…

- リポジトリルート
  - `my_own_linter/`<br />
    コミットリンターが入っています。<br />
    (別でnpmのパッケージがあるのは知ってるけど使い方がよくわからなかった)
  - `public/`<br />
    使用している`index.html`や画像などが入っています。
  - `src/`<br />
    ソースコードです。
    - `comps/`<br />
      コンポーネント群です。
      - `common/`<br />
        複数ページで使いまわして使うコンポーネントが入っています。
      - `drawer/`<br />
        スマートフォンからの閲覧時に使用できるドロワー関係のコンポーネントが入っています。
      - `header/`<br />
        ページ上部のヘッダーが入っています。
      - `pages/`<br />
        各ページのコンポーネントが入っています。
      - `Router.tsx`<br />
        ルーティングを行うためのコンポーネントです。
    - `data/`<br />
      データ群です。WorksやSkillなどの設定ファイルがここに入っています。
  - その他ファイル<br />
    ReactやTypescriptを動かすための設定ファイル群です。
