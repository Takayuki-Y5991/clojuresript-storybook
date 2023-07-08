(ns app.stories.core-stories
  (:require [rum.core :refer [defc]]
            [app.stories.helper :as helper]))

(defc my-button
  [message]
  [:<>
   [:h1 message]])

(defc ^:export default []
  #js {:title "Button"
       :component 'my-button
       :args {:message "This is a message"}})
