import React, { useEffect, useRef, useState } from "react";
import Pencil from "../../assets/icons/pencil.svg?react";
import { useProfile } from "../../services/ProfileContext";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profileImage: string;
}

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setProfileImage } = useProfile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData?.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData?.password.length && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    ["name", "username", "email", "dob", "city", "country", "password"].forEach((field) => {
      if (!formData?.[field as keyof FormData]) {
        newErrors[field] = "This field is required.";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Form submitted:", formData);
    // TODO: Send formData to API
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && formData) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setFormData({ ...formData, profileImage: imageUrl });
        setProfileImage(imageUrl); // 👈 update global profile image too!
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    fetch("/userData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch form data");
        }
        return response.json();
      })
      .then((data) => {
        setFormData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching form data:", error);
        setLoading(false);
      });
  }, []);

  if (loading || !formData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8">
      <div className="p-6 w-full grid grid-cols-12 gap-4">
        {/* Profile Picture */}
        <div className="flex justify-center md:justify-start mb-6 col-span-12 md:col-span-2 relative">
        <div className="relative">
        <img
            src={formData.profileImage}
            alt="Profile"
            className="w-[90px] h-[90px] rounded-full object-cover"
          />
          <div className="bg-[#232323] w-[30px] h-[30px] rounded-[50px] flex justify-center items-center absolute right-0 top-[60px]">
          <Pencil className="w-[15px] h-[15px]" onClick={triggerFileSelect}></Pencil>
          </div>
          
          {/* <button
            type="button"
            
            className="absolute bottom-0 right-2 bg-black p-1 rounded-full"
          >
          </button> */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>
          
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-12 md:col-span-10"
        >
          {/* Input Fields */}
          {[
            { label: "Your Name", name: "name" },
            { label: "User Name", name: "username" },
            { label: "Email", name: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Date of Birth", name: "dob" },
            { label: "Present Address", name: "presentAddress" },
            { label: "Permanent Address", name: "permanentAddress" },
            { label: "City", name: "city" },
            { label: "Postal Code", name: "postalCode" },
            { label: "Country", name: "country" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 text-md">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors[field.name] ? "border-red-400" : "border-[#DFEAF2]"
                } rounded-[15px] h-[50px] text-[15px] text-[#718EBF]`}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Save Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 h-[50px] bg-black text-white w-[190px] rounded-[15px] hover:bg-gray-800 active:scale-95 transition transform duration-150"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
