import React, { useState, useEffect } from "react";
import { IoCameraOutline } from "react-icons/io5";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { showNotification } from "../../components/ui/Notification";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setUser(savedProfile);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(user));
   showNotification(
      "success",
      "Profile updated sucessfully!"
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100 dark:bg-black transition">

       <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8">


        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Account Information
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Edit your profile quickly
          </p>
        </div>

        {/* Avatar */}

        <div className="relative flex justify-center mb-8">

          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">

            {user.image ? (
              <img
                src={user.image}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-300">
                No Photo
              </div>
            )}

          </div>

          {/* Camera Icon */}

          <label className="absolute top-18 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600">

            <IoCameraOutline className="text-lg text-gray-600 dark:text-gray-300" />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

          </label>

        </div>

        {/* Form */}

        <Input
          label="Full Name"
          name="name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <Input
          label="Phone Number"
          name="phone"
          value={user.phone}
          onChange={(e) =>
            setUser({ ...user, phone: e.target.value })
          }
        />

        <Button
          onClick={handleSave}
          className="mt-4 bg-black text-white dark:bg-white dark:text-black"
        >
          Update Now
        </Button>

      </div>

    </div>
  );
};

export default Profile;