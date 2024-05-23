"use strict";

const { User } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "demo@aa.io",
          username: "Demo",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          email: "user10@user.io",
          username: "FakeUser10",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          firstName: "Bob",
          lastName: "Johnson",
          email: "user20@user.io",
          username: "FakeUser20",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          firstName: "Alice",
          lastName: "Williams",
          email: "user30@user.io",
          username: "FakeUser30",
          hashedPassword: bcrypt.hashSync("password4"),
        },
        {
          firstName: "Michael",
          lastName: "Brown",
          email: "user40@user.io",
          username: "FakeUser40",
          hashedPassword: bcrypt.hashSync("password5"),
        },
        {
          firstName: "Emily",
          lastName: "Davis",
          email: "user50@user.io",
          username: "FakeUser50",
          hashedPassword: bcrypt.hashSync("password6"),
        },
        {
          firstName: "David",
          lastName: "Wilson",
          email: "user6@user.io",
          username: "FakeUser6",
          hashedPassword: bcrypt.hashSync("password7"),
        },
        {
          firstName: "Emma",
          lastName: "Taylor",
          email: "user7@user.io",
          username: "FakeUser7",
          hashedPassword: bcrypt.hashSync("password8"),
        },
        {
          firstName: "Oliver",
          lastName: "Thomas",
          email: "user8@user.io",
          username: "FakeUser8",
          hashedPassword: bcrypt.hashSync("password9"),
        },
        {
          firstName: "Sophia",
          lastName: "Lee",
          email: "user9@user.io",
          username: "FakeUser9",
          hashedPassword: bcrypt.hashSync("password10"),
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        username: {
          [Op.in]: [
            "Demo",
            "FakeUser10",
            "FakeUser2",
            "FakeUser3",
            "FakeUser4",
            "FakeUser5",
            "FakeUser6",
            "FakeUser7",
            "FakeUser8",
            "FakeUser9",
          ],
        },
      },
      {});
  },
};
