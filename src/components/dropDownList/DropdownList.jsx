import React, { useState } from "react"
import classes from "./DropdownList.module.scss"
import classNames from "classnames"
import { Link } from "react-router-dom"

const lesson = [
  {
    stageName:
      "Вхождение в тему урока и создание условий для осознанного восприятия нового материала ",
    lessonTopic: [
      {
        topicName: "Мотивация",
        testName: [{ test: "Тест с включением медиа-объектов " }],
        stages: "completed",
      },
      {
        topicName: "Актуализация опорных знаний",
        testName: [
          { test: "Тест с включением медиа-объектов" },
          { test: "Тест с включением медиа-объектов" },
        ],
        stages: "completed",
      },
      {
        topicName: "Целеполагание",
        testName: [{ test: "Тест с включением медиа-объектов" }],
        stages: "completed",
      },
    ],
    stages: "completed",
  },
  {
    stageName: "Освоение нового материала",
    lessonTopic: [
      {
        topicName:
          "Осуществление учебных действий по освоению нового материала",
        testName: [{ test: "Тест с включением медиа-объектов " }],
        stages: "completed",
      },
      {
        topicName: "Проверка первичного освоения",
        testName: [{ test: "Тест с включением медиа-объектов" }],
        stages: "completed",
      },
      {
        topicName: "Целеполагание",
        testName: [{ test: "Тест с включением медиа-объектов" }],
        stages: "completed",
      },
    ],
    stages: "completed",
  },
  {
    stageName: "Применение изученного материала",
    lessonTopic: [
      {
        topicName: "Применение знаний, в том числе в новых ситуациях",
        testName: [
          { test: "Тест с включением медиа-объектов " },
          { test: "Тест с включением медиа-объектов " },
          { test: "Тест с включением медиа-объектов " },
          { test: "Тест с включением медиа-объектов " },
        ],
        stages: "completed",
      },
      {
        topicName:
          "Выполнение межпредметных заданий и заданий из реальной жизни",
        testName: [{ test: "Тест с включением медиа-объектов" }],
        stages: "completed",
      },
      {
        topicName: "Выполнение заданий в формате ГИА (ОГЭ, ЕГЭ)",
        testName: [
          { test: "Тест с включением медиа-объектов" },
          { test: "Тест с включением медиа-объектов" },
          { test: "Тест с включением медиа-объектов" },
          { test: "Тест с включением медиа-объектов" },
        ],
        stages: "active",
      },
      {
        topicName: "Развитие функциональной грамотности",
        testName: [
          { test: "Тест с включением медиа-объектов" },
          { test: "Тест с включением медиа-объектов" },
        ],
        stages: "unstarted",
      },
      {
        topicName: "Систематизация знаний и умений",
        testName: [{ test: "Тест с включением медиа-объектов" }],
        stages: "unstarted",
      },
    ],
  },
  {
    stageName: "Проверка приобретенных знаних, умений и навыков",
    lessonTopic: [
      {
        topicName: "Диагностика, самодиагностика",
        testName: [{ test: "Тест с включением медиа-объектов " }],
        stages: "unstarted",
      },
    ],
    stages: "unstarted",
  },
  {
    stageName: "Подведение итогов, домашнее задание",
    lessonTopic: [
      {
        topicName: "Самооценивание, рефлексия",
        testName: [{ test: "Тест с включением медиа-объектов " }],
        stages: "unstarted",
      },
      {
        topicName: "Домашнее задание",
        testName: [
          { test: "Тест с включением медиа-объектов " },
          { test: "Тест с включением медиа-объектов " },
          { test: "Тест с включением медиа-объектов " },
        ],
        stages: "unstarted",
      },
    ],
    stages: "unstarted",
  },
]

function DropdownList() {
  const [active, setActive] = useState(false)

  const color = (stages, title = false) => {
    switch (stages) {
      case "completed":
        return title ? classes.completedStage : classes.completedTopic
      case "active":
        return title ? classes.activeStage : classes.activeTopic
      default:
        return title ? classes.unstartedStage : classes.unstartedTopic
    }
  }

  return (
    <div className={classNames(classes.dropdownWrapper)}>
      {lesson.map((lessonItem, lessonIndex) => (
        <div key={lessonIndex}>
          <button
            className={classNames(
              classes.dropdownBtn,
              color(lessonItem.stages, true)
            )}
            onClick={() => setActive(!active)}
          >
            {lessonItem.stageName}
            <img
              src=""
              alt=""
              className={classNames(active ? classes.turnImg : null)}
            />
          </button>
          {lessonItem.lessonTopic.map((lessonTopic, topicIndex) => (
            <div
              key={topicIndex}
              className={classNames(
                classes.dropdownTopic,
                color(lessonTopic.stages),
                active ? classes.dropdownTopicOpen : null
              )}
            >
              <Link className={classes.link} to="/test">
                {lessonTopic.topicName}
              </Link>
              {lessonTopic.testName.map((test, testIndex) => (
                <div key={testIndex}>
                  <img src="" alt="" /> {test.test}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default DropdownList
