show databases;

CREATE DATABASE `note_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

use `note_db`;

CREATE TABLE `notes` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) NOT NULL,
  `color` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


select * from `notes` ;

INSERT INTO `note_db`.`notes`
(`id`,
`text`,
`color`)
VALUES
(1, 'Buy dog food', 'yellow'),
(2, 'Go for a run', 'yellow'),
(3, 'Call parents', 'red'),
(4, 'Cut the grass', 'yellow'),
(5, 'Schedule dentist appointment', 'red'),
(6, 'Clean bedroom', 'red'),
(7, 'You can do this', 'purple'),
(8, 'Watch Netflix', 'yellow'),
(9, 'Submit project proposal', 'green');

select * from `notes` ;