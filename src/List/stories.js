import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import ListItemActionButton from "./ListItemActionButton";
import ListItemText from "./ListItemText";

export default { title: "List", component: List };

const simpleListData = ["elm", "birch", "oak", "spruce", "pine"];

export const simpleList = () => (
  <List>
    {simpleListData.map(d => (
      <ListItem key={d}>
        <ListItemText>{d}</ListItemText>
      </ListItem>
    ))}
  </List>
);

const detailedListData = [
  {
    id: 1,
    type: "elm",
    detail:
      "The elm tree can grow to great height, often with a forked trunk creating a vase profile"
  },
  {
    id: 2,
    type: "birch",
    detail:
      "Birch species are generally small to medium-sized trees or shrubs, mostly of northern temperate and boreal climates"
  },
  {
    id: 3,
    type: "oak",
    detail:
      "Oaks have spirally arranged leaves, with lobate margins in many species; some have serrated leaves or entire leaves with smooth margins"
  },
  {
    id: 4,
    type: "spruce",
    detail:
      "Spruces are large trees, from about 20–60 m (about 60–200 ft) tall when mature, and have whorled branches and conical form"
  },
  {
    id: 5,
    type: "pine",
    detail:
      "Pine trees are evergreen, coniferous resinous trees (or, rarely, shrubs) growing 3–80 m (10–260 ft) tall, with the majority of species reaching 15–45 m (50–150 ft) tall"
  }
];

export const detailedList = () => (
  <List>
    {detailedListData.map(({ id, type, detail }) => (
      <ListItem key={id}>
        <ListItemText>{type}</ListItemText>
        <ListItemText secondary>{detail}</ListItemText>
      </ListItem>
    ))}
  </List>
);
