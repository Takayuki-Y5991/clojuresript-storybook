(ns app.stories.core-stories
  (:require [rum.core :refer [defc]]
            ["@storybook/addon-actions" :refer [action]]
            [app.stories.helper :refer [$]]
            [goog.object :as gobj]))

;; RUMとの相性があまりよろしくないのか、でできないことが判明
;; (defc my-button
;;   [message]
;;   [:<>
;;    [:h1 message]])

;; (defc ^:export default []
;;   #js {:title "Button"
;;        :component 'my-button
;;        :args {:message "This is a message"}})


(defn basic
  [props]
  ($ "button" props (gobj/get props "children")))

(def ^:export default
  #js {:title "My Button"
       :component basic})

(defn ^:export Text
  []
  ($ basic #js {:onClick (action "clicked")} "click"))


(defn ^:export Emoji
  []
  ($ basic
     #js {:onClick (action "clicked")}
     ($ "span" #js {:role "img" :aria-label "so cool"}
        "😀 😎 👍 💯")))