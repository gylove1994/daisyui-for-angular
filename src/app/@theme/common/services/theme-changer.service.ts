import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ThemeChangerService {
  private _theme: string = "light";

  constructor() { }

  public get theme(): string {
    return this._theme;
  }

  public set theme(theme: string) {
    this._theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
  }
}
