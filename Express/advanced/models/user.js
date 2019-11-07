const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  articles: [{ type: mongoose.Types.ObjectId, ref: "Article" }]
});

const User = model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    articles: Joi.array().items(Joi.string())
  });

  return schema.validate(user);
}
module.exports = {
  User,
  validateUser
};
