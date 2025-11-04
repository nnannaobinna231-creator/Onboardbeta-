import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import bcrypt from 'bcrypt';

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationToken: {
      type: DataTypes.STRING
    },
    passwordChangeToken: {
      type: DataTypes.STRING
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employment_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    profile_picture: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        user.email = user.email.toLowerCase();
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('email')) {
          user.email = user.email.toLowerCase();
        }
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      }
    }
  }
);

User.prototype.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

sequelize.sync({ alter: true });



export default User;