export class Function {
  name: string;
  image: string;
  memory: number;
  timeout: number;
  idle_timeout: number;

  constructor(form: any) {
    this.name = form.name;
    this.image = form.image;
    this.memory = form.memory;
    this.timeout = form.timeout;
    this.idle_timeout = form.idle_timeout;
  }
}
