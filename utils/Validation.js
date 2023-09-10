import val from "validate.js";

const ValidateSignUp = (username, email, password, first_name, last_name) => {
  console.log(first_name, "in valdiation is ");
  var constraints = {
    username: {
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
      length: {
        maximum: 20,
        message: "username must of maximum of 20 characters",
      },
    },
    email: {
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
      email: true,
    },

    password: {
      presence: true,
      length: {
        minimum: 8,
        message: "must be at least 8 characters",
      },
    },
    first_name: {
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
    },
    last_name: {
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
    },
  };

  return val(
    {
      username: username,
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
    },
    constraints
  );
};

const ValidateLogin = (email, password) => {
  var constraints = {
    email: {
      // email: true,
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
      length: {
        maximum: 30,
        message: "Name must of maximum of 30 characters",
      },
    },

    password: {
      presence: true,
      length: {
        minimum: 8,
        message: "must be at least 8 characters",
      },
    },
  };

  return val({ email: email, password: password }, constraints);
};

const ValidateCompliance = (Product) => {
  var constraints = {
    Product: {
      // email: true,
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
      // length: {
      //   maximum: 30,
      //   message: "Name must of maximum of 30 characters",
      // },
    },
  };

  return val({ Product: Product }, constraints);
};

export { ValidateSignUp, ValidateLogin, ValidateCompliance };
