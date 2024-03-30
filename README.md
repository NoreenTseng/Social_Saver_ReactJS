# Style guide

https://www.figma.com/file/faMRUWq1qvhTLxWLLSCd1f/SRID-Social-Media-Team?node-id=418%3A154&mode=dev

# Starting script

- `npm i`
- `npm start`

# Tech stacks

- react
- material UI
- tailwind css

# Structure

- components: common components
- pages: all tab pages
- public: public resources, like images
- app.css: common css and css variables

# How to use common components

example:

```
in your jsx:
import {ConfirmButton, CancelButton} from "../../components/Button";

<ConfirmButton
    onClick={() => {
        // confirm code
    }}
>
    Publish
</ConfirmButton>
<CancelButton
    onClick={() => {
        // cancel code
    }}
>
    Cancel
</CancelButton>
```

# Limitations

### Our MVP for SocialSaver has the following limitations:

### For all features:

    - Please use mobile resolution(max width 414 px) when browsing our app
    - There is no Database storage.

### Create Events:

    - No matter the name/description/type users enter, fixed event will be created
    - Uploading images feature is not supported

### Search Events:

    - There are only four categories for categorizing all the events.
    - The events are hard-coded.
    - Shares the same local storage with Create Events Feature.

### Weekly Report:

    - Only the usage history of one week can be seen

### Study Buddies:

    - History matching result is fixed to three people
    - Matching buddies is randomly selected from three people
    - The study session goal, duration and description is not stored
    - After the search start, the search cannot be stopped and can only use back button to go back to the previous page
    - The searching loading progress bar is not implemented
