import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize(){
    this.componentPromise = import('./components/HelloComponent');
  }

  async connect() {
    this.component = await this.componentPromise;

    const root = this.targets.find("root");
    this.component.render(root);
  }

  disconnect() {
    const root = this.targets.find('root');
    this.component.destroy(root);
  }
}