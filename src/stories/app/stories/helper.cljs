(ns app.stories.helper)

(defn ->params [^js args]
  (js->clj args :keywordize-keys true))

(defn ->default [options]
  (-> options
      clj->js))