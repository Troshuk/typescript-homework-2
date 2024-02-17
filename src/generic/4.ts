/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type ComponentProps = {};

class Component<Props extends ComponentProps> {
  constructor(public props: Props) {}
}

type PageProps = ComponentProps & {
  title: string;
};

interface PageComponent {
  props: PageProps;
  pageInfo(): void;
}

class Page extends Component<PageProps> implements PageComponent {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "ABC..." });

export {};
