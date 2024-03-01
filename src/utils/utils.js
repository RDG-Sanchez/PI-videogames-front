export const functions = {
  convertDate: (string) => {
    const date = new Date(string);
    const arrMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = arrMonths[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day + 1}, ${year}`;
  },
};

const regex = {
  validURL:
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
  validDATE: /^\d{4}-\d{2}-\d{2}$/,
  validNAME: /^[A-Za-z0-9\s]+$/,
};

export const converters = {
  convertForm: ({
    name,
    description_raw,
    background_image,
    released,
    platforms,
    genres,
    rating,
  }) => {
    const filterGenres = new Set(genres);
    const filterPlatforms = new Set(platforms);
    return {
      name: name.trim(),
      description_raw,
      background_image,
      released,
      platforms: [...filterPlatforms]
        .filter((platform) => platform !== "- Select a platforms -")
        .map((platform) => {
          return { platform: { name: platform } };
        }),
      genres: [...filterGenres]
        .filter((genre) => Number(genre))
        .map((genre) => Number(genre)),
      rating: Number(rating),
    };
  },
};

export const validators = {
  validName: (name) => {
    if (!name) {
      return "Enter a name";
    } else if (name.trim() === "") {
      return "Enter a name";
    } else if (!regex.validNAME.test(name)) {
      return "Cannot contain special characters";
    } else {
      return "";
    }
  },
  validDescription: (description) => {
    if (!description) {
      return "Enter a description";
    } else if (description.trim() === "") {
      return "Enter a description";
    } else if (description.length < 30) {
      return "At least you must enter 30 characters";
    } else if (description.length > 2500) {
      return "You have exceeded 2500 characters";
    } else {
      return "";
    }
  },
  validPlatforms: (platforms) => {
    if (platforms.length === 0) {
      return "Enter a platforms";
    } else {
      return "";
    }
  },
  validGenres: (genres) => {
    if (genres.length === 0) {
      return "Enter a genres";
    } else {
      return "";
    }
  },
  validImage: (image) => {
    if (!image) {
      return "Enter a image";
    } else if (!regex.validURL.test(image)) {
      return "Enter a valid URL";
    } else {
      return "";
    }
  },
  validReleaseDate: (date) => {
    if (!date) {
      return "Enter a date";
    } else if (!regex.validDATE.test(date)) {
      return "Enter a valid date";
    } else if (new Date(date).getFullYear() < 1950) {
      return "Enter a year after 1950";
    } else {
      return "";
    }
  },
  validRating: (rating) => {
    if (!rating) {
      return "Enter a rating";
    } else if (rating <= 1) {
      return "It has to be greater than 1";
    } else if (rating > 5) {
      return "The maximum value is 5";
    } else {
      return "";
    }
  },
};
