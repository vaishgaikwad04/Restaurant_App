import React, { useState, useEffect } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("profile"));
    if (saved) setUser(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(user));
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

  const handleRemoveImage = () => {
    setUser({
      ...user,
      image: "",
    });
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete your account?",
    );

    if (confirmDelete) {
      localStorage.removeItem("profile");

      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        image: "",
      });

      alert("Account deleted successfully");
    }
  };
  return (
    <>
      <div className=" ">
        <h1 className="text-2xl mx-1 font-semibold text-gray-800 dark:text-white mb-4">
          Account Profile
        </h1>
      </div>
      <div className="flex justify-start bg-gray-100 dark:bg-black h-168 py-2">
        <div className="w-full max-w-8xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700 rounded shadow p-8">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Personal Information
          </h3>

          <hr className="border-gray-200 dark:border-gray-700 mb-6" />

          {/* Avatar */}

          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20  overflow-hidden bg-gray-200 border">
                {user.image ? (
                  <img
                    src={user.image}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <input
                id="profileImage"
                type="file"
                className="hidden"
                onChange={handleImageUpload}
                accept="image/*"
              />

              <label
                htmlFor="profileImage"
                className="px-4 py-1.5 rounded-md text-sm font-medium cursor-pointer
      bg-black text-white hover:bg-gray-800
      dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
              >
                Upload Image
              </label>

              <button
                onClick={handleRemoveImage}
                className="px-4 py-1.5 rounded-md text-sm font-medium
      border border-gray-300 text-gray-700
      hover:bg-gray-100
      dark:border-gray-700 dark:text-gray-300
      dark:hover:bg-gray-800 transition"
              >
                Remove
              </button>
            </div>
          </div>

          {/* Name Fields */}

          <div className="grid grid-cols-2 gap-4 mb-8">
            <Input
              label="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              placeholder="Enter First Name"
            />

            <Input
              label="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              placeholder="Enter Last Name"
            />
          </div>

          {/* ACCOUNT SECURITY */}

          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Account Security
          </h3>

          <hr className="border-gray-200 dark:border-gray-700 mb-6" />

          <div className="space-y-4 mb-8">
            <Input
              label="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter Email"
              className="!w-190"
            />
          </div>

          {/* Danger Zone */}

          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-red-700 dark:text-red-400 font-semibold">
                Delete my account
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Permanently delete the account and remove access from all
                workspaces
              </p>
            </div>

            <button
              onClick={handleDeleteAccount}
              className="
  px-4 py-1.5 rounded-md text-sm font-medium
  bg-gray-100 text-gray-800
  hover:bg-red-50 hover:text-red-600
  dark:bg-red-900/20 dark:text-red-400
  dark:hover:bg-red-900/40 dark:hover:text-red-300
  transition
  "
            >
              Delete Account
            </button>
          </div>

          {/* Save Button */}

          <div className="flex justify-end mt-4">
            <Button
              className="bg-black text-white dark:bg-white dark:text-black px-6"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
