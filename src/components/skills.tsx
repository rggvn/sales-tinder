"use client";
import { skills } from "@/data/skills";
import { use, useEffect, useState } from "react";

const FormRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-2 flex flex-col gap-1">{children}</div>;
};

const CheckBox = ({
  name,
  selected = false,
}: {
  name: string;
  selected: boolean;
}) => {
  const strippedName = name.replace(/\s/g, "");
  const [checked, setChecked] = useState(selected);
  return (
    <div>
      <input
        type="checkbox"
        id={strippedName}
        value={name}
        className="hidden peer"
        name="skills"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <label
        htmlFor={strippedName}
        className="inline-flex items-center justify-between py-2 px-3 text-gray-500 bg-white border-2 border-gray-200 rounded-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 "
      >
        <div className="block">
          <div className="w-full text-sm">{name}</div>
        </div>
      </label>
    </div>
  );
};

const Range = ({ value = "0" }: { value: string }) => {
  console.log(value);
  const [distance, setDistance] = useState(parseInt(value));

  return (
    <div className="">
      <label htmlFor="range-input">Max travel distance (Km)</label>
      <div className="flex items-center gap-2">
        <input
          id="range-input"
          type="range"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value))}
          min="5"
          max="100"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="number"
          id="range-input"
          className="py-2 px-3 text-gray-500 bg-white border-2 border-gray-200 rounded-md focus:border-blue-600 hover:text-gray-600 focus:text-gray-600 w-20 grow-0"
          value={distance}
          name="distance"
          required
          onChange={(e) => setDistance(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [formValues, setFormValues] = useState({} as Record<string, string>);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const values = localStorage.getItem("skillValues");
    if (values) {
      const parsedValues = JSON.parse(values);
      setFormValues(parsedValues);
      setLocation(parsedValues.location);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    var object = {};
    formData.forEach((value, key) => {
      // Reflect.has in favor of: object.hasOwnProperty(key)
      if (!Reflect.has(object, key)) {
        object[key] = value;
        return;
      }
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]];
      }
      object[key].push(value);
    });
    localStorage.setItem("skillValues", JSON.stringify(object));
  };

  console.log(formValues, location);

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow-sm min-w-96 max-w-5xl bg-white rounded-md py-4 px-6 mb-4">
        <h2 className="font-semibold text-xl">Select your Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <CheckBox
              name={skill}
              key={skill}
              selected={formValues?.skills?.includes(skill)}
            />
          ))}
        </div>

        <hr className="my-4" />
        <h2 className="font-semibold text-xl">Location</h2>
        <FormRow>
          <label htmlFor="location">Your location</label>
          <input
            type="text"
            name="location"
            id="location"
            className="w-full py-2 px-3 text-gray-500 bg-white border-2 border-gray-200 rounded-md focus:border-blue-600 hover:text-gray-600 focus:text-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Range value={formValues?.distance} />
        </FormRow>
      </div>
      <button className="text-white hover:bg-blue-700 px-3 py-2 rounded-md bg-blue-600">
        Save
      </button>
    </form>
  );
};

export default Skills;
