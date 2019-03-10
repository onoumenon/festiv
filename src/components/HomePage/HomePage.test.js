import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import HomePage from "./HomePage";
import * as MusicianService from "../../services/musicianService";

const sampleData = [
  {
    _id: "1",
    name: "Inch Chua",
    description:
      "Inch Chua Yun Juan, stylized as iNCH, is a Singaporean singer-songwriter, musician, producer, actress and artist previously based in Los Angeles and New York. After rising to fame in Singapore's nascent indie scene as lead singer of the rock band Allura, Chua began to record on her own, blending acoustic folk with alternative rock, electronic music, jazz and pop influence. Inch Chua is backed live by her band, The Metric System.",
    avatar: "images/musicians/inch-chua-s.png"
  },
  {
    _id: "2",
    name: "Tabitha Nauser",
    description:
      'Tabitha Nauser is a Singaporean pop/R&B singer who was the second runner-up in the 2009 season of Singapore Idol (Season 3). In 2010, she was selected to represent the continent of Asia to sing the Official Theme Song of the Singapore 2010 Youth Olympic Games, "Everyone".',
    avatar: "images/musicians/tabitha-nauser-s.png"
  }
];

beforeEach(() => {
  jest
    .spyOn(MusicianService, "getMusicians")
    .mockImplementation(() => sampleData);
});

afterEach(() => {
  MusicianService.getMusicians.mockRestore();
});

test("displays musicians on load", () => {
  const { getByAltText } = render(<HomePage />);

  expect(MusicianService.getMusicians).toHaveBeenCalledTimes(1);
  expect(getByAltText(/Tabitha/i).length).toEqual(1);
  expect(getByAltText(/Inch/i).length).toEqual(1);
});
