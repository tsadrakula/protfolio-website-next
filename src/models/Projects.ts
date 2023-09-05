import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  prop,
  post
} from "@typegoose/typegoose";
import mongoose from "mongoose";


@post<ProjectClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<ProjectClass[]>(/^find/, function (docs) {
  // @ts-ignore
  if (this.op === "find") {
    docs.forEach((doc) => {
      doc.id = doc._id.toString();
      doc._id = doc.id;
    });
  }
})
@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "projects",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })
class ProjectClass {
  @prop({ required: true, unique: true })
  title: string;
  @prop()
  description: string;
  @prop()
  imageUrl: string;
  @prop()
  tags: string[];

  @prop({ default: false })
  completed: boolean;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Project = getModelForClass(ProjectClass);
export { Project, ProjectClass };
