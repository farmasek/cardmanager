/**
 * Created by Farmas on 29.10.2016.
 */
export class NewsField {

  id: number;
  label: string;
  tag: string;
  text: string;
  created: Date;

  constructor(id: number, label: string, tag: string, text: string, created: Date) {
    this.id = id;
    this.label = label;
    this.tag = tag;
    this.text = text;
    this.created = created;
  }
}

export const mapToNewsField = (src: any) => {
  return new NewsField(src.id, src.label, src.tag, src.text, src.created)
};
