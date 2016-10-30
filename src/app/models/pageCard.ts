import {__core_private__} from "@angular/core";
/**
 * Created by Farmas on 26.10.2016.
 */
export class PageCard {

  letter: string;
  name: string;
  description: string;
  link: string;
  color: string;


  constructor(letter: string, name: string, description: string, link: string, color: string) {
    this.letter = letter;
    this.name = name;
    this.description = description;
    this.link = link;
    this.color = color;
  }

}

export const mapToCard = (src: any) => {
  return new PageCard(src.letter, src.name, src.description, src.link, src.color)
}

export const cardList: Array<PageCard> = [
  // new PageCard("A", "AppiHubiale le kek", "le app foar shuao ai aoos to sreeal ahhu"),
  // new PageCard("P", "Plieia le ce veresarion", "le a ff+ gg akjal qůů app foar shuao ai aoos to sreeal ahhu"),
  // new PageCard("I", "IntelliShip da broins", "le app khlfůa §ůaf§ jůgas shuao ai aoos to sreeal ahhu"),
  // new PageCard("T", "Calla la switchaala ", "+fšš le afpp foar shuao ai aoos to sreeal ahhu"),
  // new PageCard("C", "caid mrsots", "le app foar shuao ai aoos to sreeal ahhu")
]
