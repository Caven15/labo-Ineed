-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : mer. 18 mai 2022 à 11:57
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_ineed`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `nom`) VALUES
(1, 'livre'),
(2, 'high-tec'),
(3, 'cuisine et maison'),
(4, 'informatique'),
(5, 'mode'),
(6, 'comestible'),
(7, 'bricolage'),
(8, 'jeux-vidéo'),
(9, 'sport et loisir'),
(10, 'auto moto'),
(11, 'animalerie'),
(12, 'electromenager'),
(13, 'fourniture de bureau');

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `utilisateurId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `utilisateurId` (`utilisateurId`),
  KEY `roleId` (`roleId`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `createdAt`, `updatedAt`, `utilisateurId`, `roleId`) VALUES
(1, '1982-12-09 00:00:00', '1994-12-06 00:00:00', 1, 1),
(2, '1998-06-22 00:00:00', '1981-10-31 00:00:00', 2, 1),
(3, '1998-11-06 00:00:00', '1983-12-04 00:00:00', 3, 1),
(4, '1980-09-11 00:00:00', '1990-09-01 00:00:00', 4, 1),
(5, '1989-04-21 00:00:00', '1994-01-15 00:00:00', 5, 1),
(6, '1992-09-26 00:00:00', '1993-03-24 00:00:00', 6, 1),
(7, '1995-12-12 00:00:00', '1997-11-07 00:00:00', 7, 1),
(8, '1980-09-24 00:00:00', '1997-03-29 00:00:00', 8, 1),
(9, '1983-01-16 00:00:00', '1997-09-12 00:00:00', 9, 1),
(10, '1987-09-13 00:00:00', '1982-10-03 00:00:00', 10, 1),
(11, '1999-01-02 00:00:00', '1981-01-12 00:00:00', 11, 1),
(12, '1995-06-23 00:00:00', '1994-05-12 00:00:00', 12, 1),
(13, '1994-08-08 00:00:00', '1984-03-16 00:00:00', 13, 1),
(14, '1993-10-18 00:00:00', '2000-04-20 00:00:00', 14, 1),
(15, '1984-08-12 00:00:00', '1988-11-11 00:00:00', 15, 1),
(16, '1994-03-23 00:00:00', '1981-05-20 00:00:00', 16, 1),
(17, '1986-04-23 00:00:00', '2000-02-20 00:00:00', 17, 1),
(18, '1981-12-31 00:00:00', '1984-11-05 00:00:00', 18, 1),
(19, '1993-03-16 00:00:00', '1984-10-21 00:00:00', 19, 1),
(20, '1984-12-02 00:00:00', '1985-01-28 00:00:00', 20, 1),
(21, '1990-07-24 00:00:00', '1985-05-23 00:00:00', 21, 1),
(22, '1986-03-27 00:00:00', '1984-08-15 00:00:00', 22, 1),
(23, '1988-12-01 00:00:00', '1984-11-18 00:00:00', 23, 1),
(24, '1998-07-18 00:00:00', '1994-07-05 00:00:00', 24, 1),
(25, '1991-04-27 00:00:00', '1988-01-08 00:00:00', 25, 1),
(26, '1992-11-10 00:00:00', '1996-09-24 00:00:00', 26, 1),
(27, '1980-09-17 00:00:00', '1993-01-17 00:00:00', 27, 1),
(28, '1998-10-21 00:00:00', '1992-06-05 00:00:00', 28, 1),
(29, '1995-09-24 00:00:00', '1991-01-04 00:00:00', 29, 1),
(30, '1985-02-15 00:00:00', '1996-06-13 00:00:00', 30, 1),
(31, '1989-12-04 00:00:00', '1992-06-02 00:00:00', 31, 1),
(32, '1994-04-16 00:00:00', '1981-05-27 00:00:00', 32, 1),
(33, '1986-04-01 00:00:00', '1986-09-30 00:00:00', 33, 1),
(34, '1985-05-29 00:00:00', '1995-02-03 00:00:00', 34, 1),
(35, '1984-04-22 00:00:00', '1988-09-13 00:00:00', 35, 1),
(36, '1996-02-14 00:00:00', '1998-05-19 00:00:00', 36, 1),
(37, '2000-01-25 00:00:00', '1990-12-28 00:00:00', 37, 1),
(38, '1986-10-03 00:00:00', '1985-11-14 00:00:00', 38, 1),
(39, '1984-08-18 00:00:00', '1981-10-21 00:00:00', 39, 1),
(40, '1986-10-06 00:00:00', '1992-11-15 00:00:00', 40, 1),
(41, '1988-09-18 00:00:00', '1984-12-14 00:00:00', 41, 1),
(42, '1989-01-02 00:00:00', '1992-11-06 00:00:00', 42, 1),
(43, '2000-01-22 00:00:00', '1999-04-24 00:00:00', 43, 1),
(44, '1998-08-05 00:00:00', '1997-10-01 00:00:00', 44, 1),
(45, '1987-12-22 00:00:00', '1981-12-24 00:00:00', 45, 1),
(46, '1986-06-25 00:00:00', '1992-11-03 00:00:00', 46, 1),
(47, '1996-12-06 00:00:00', '1981-07-28 00:00:00', 47, 1),
(48, '1989-08-22 00:00:00', '1996-01-10 00:00:00', 48, 1),
(49, '1989-05-26 00:00:00', '1995-06-10 00:00:00', 49, 1),
(50, '1984-02-27 00:00:00', '1995-09-23 00:00:00', 50, 1),
(51, '1982-03-10 00:00:00', '1988-03-16 00:00:00', 51, 1),
(52, '1989-02-03 00:00:00', '1980-12-19 00:00:00', 52, 1),
(53, '1983-11-15 00:00:00', '1989-01-03 00:00:00', 53, 1),
(54, '1986-04-07 00:00:00', '1989-09-30 00:00:00', 54, 1),
(55, '1981-10-19 00:00:00', '1980-06-19 00:00:00', 55, 1),
(56, '1985-06-30 00:00:00', '1997-07-21 00:00:00', 56, 1),
(57, '1984-07-10 00:00:00', '1999-09-11 00:00:00', 57, 1),
(58, '1983-01-20 00:00:00', '1995-04-16 00:00:00', 58, 1),
(59, '1998-10-08 00:00:00', '1988-05-30 00:00:00', 59, 1),
(60, '1996-08-03 00:00:00', '2000-01-25 00:00:00', 60, 1),
(61, '1983-10-23 00:00:00', '1993-03-22 00:00:00', 61, 1),
(62, '1990-04-06 00:00:00', '1999-03-26 00:00:00', 62, 1),
(63, '1980-08-08 00:00:00', '1990-08-04 00:00:00', 63, 1),
(64, '1989-04-11 00:00:00', '1988-06-04 00:00:00', 64, 1),
(65, '2000-01-26 00:00:00', '1982-06-13 00:00:00', 65, 1),
(66, '1986-02-03 00:00:00', '1997-01-12 00:00:00', 66, 1),
(67, '1996-08-31 00:00:00', '1984-06-26 00:00:00', 67, 1),
(68, '1984-06-20 00:00:00', '1992-03-18 00:00:00', 68, 1),
(69, '1992-02-04 00:00:00', '1997-10-06 00:00:00', 69, 1),
(70, '1981-06-05 00:00:00', '1988-06-25 00:00:00', 70, 1),
(71, '1996-02-20 00:00:00', '1987-09-22 00:00:00', 71, 1),
(72, '1981-10-08 00:00:00', '1990-07-28 00:00:00', 72, 1),
(73, '1992-06-15 00:00:00', '1987-12-05 00:00:00', 73, 1),
(74, '1981-07-13 00:00:00', '1990-12-26 00:00:00', 74, 1),
(75, '1992-03-12 00:00:00', '1987-12-29 00:00:00', 75, 1),
(76, '1998-06-22 00:00:00', '1996-04-10 00:00:00', 76, 1),
(77, '1991-10-15 00:00:00', '1984-09-05 00:00:00', 77, 1),
(78, '1985-07-11 00:00:00', '1987-05-15 00:00:00', 78, 1),
(79, '1984-04-02 00:00:00', '1995-04-10 00:00:00', 79, 1),
(80, '1999-05-21 00:00:00', '1994-09-13 00:00:00', 80, 1),
(81, '1999-12-26 00:00:00', '1983-06-03 00:00:00', 81, 1),
(82, '1980-06-19 00:00:00', '1983-06-12 00:00:00', 82, 1),
(83, '1997-04-02 00:00:00', '1999-10-08 00:00:00', 83, 1),
(84, '1982-03-02 00:00:00', '1997-11-11 00:00:00', 84, 1),
(85, '1994-02-02 00:00:00', '1990-12-04 00:00:00', 85, 1),
(86, '1995-10-07 00:00:00', '1986-04-23 00:00:00', 86, 1),
(87, '1997-10-23 00:00:00', '1983-09-05 00:00:00', 87, 1),
(88, '1999-08-05 00:00:00', '1996-03-24 00:00:00', 88, 1),
(89, '1984-03-15 00:00:00', '1984-11-02 00:00:00', 89, 1),
(90, '1993-04-05 00:00:00', '1990-05-27 00:00:00', 90, 1),
(91, '1984-02-25 00:00:00', '1986-05-08 00:00:00', 91, 1),
(92, '1996-10-23 00:00:00', '1989-10-08 00:00:00', 92, 1),
(93, '1982-12-17 00:00:00', '1998-11-25 00:00:00', 93, 1),
(94, '1982-04-20 00:00:00', '1984-11-14 00:00:00', 94, 1),
(95, '1988-10-04 00:00:00', '1980-09-12 00:00:00', 95, 1),
(96, '1983-04-25 00:00:00', '1998-09-10 00:00:00', 96, 1),
(97, '1992-07-10 00:00:00', '1998-03-06 00:00:00', 97, 1),
(98, '1985-01-08 00:00:00', '1988-08-18 00:00:00', 98, 1),
(99, '1982-12-12 00:00:00', '1981-01-08 00:00:00', 99, 1),
(100, '1982-07-17 00:00:00', '1987-11-18 00:00:00', 100, 1);

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prix` double NOT NULL,
  `updatedAt` datetime NOT NULL,
  `clientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clientId` (`clientId`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id`, `prix`, `updatedAt`, `clientId`) VALUES
(1, 218.6, '2021-04-07 00:00:00', 27),
(2, 750.6, '2020-07-17 00:00:00', 22),
(3, 190.8, '2020-07-27 00:00:00', 39),
(4, 459.7, '2020-09-17 00:00:00', 86),
(5, 298, '2020-12-30 00:00:00', 19),
(6, 739.8, '2020-11-15 00:00:00', 37),
(7, 527.9, '2020-09-05 00:00:00', 45),
(8, 482.9, '2020-08-14 00:00:00', 77),
(9, 344.7, '2020-10-25 00:00:00', 73),
(10, 493.3, '2020-08-29 00:00:00', 29),
(11, 314.6, '2020-07-01 00:00:00', 55),
(12, 432.3, '2021-02-17 00:00:00', 44),
(13, 479.9, '2021-01-16 00:00:00', 53),
(14, 619.6, '2020-10-12 00:00:00', 48),
(15, 683.7, '2020-07-27 00:00:00', 42),
(16, 243.1, '2021-04-24 00:00:00', 49),
(17, 112.5, '2021-03-30 00:00:00', 58),
(18, 786.7, '2020-06-30 00:00:00', 67),
(19, 249.2, '2020-07-09 00:00:00', 70),
(20, 210.9, '2021-01-10 00:00:00', 96),
(21, 143.7, '2020-06-03 00:00:00', 56),
(22, 457.7, '2020-06-27 00:00:00', 67),
(23, 599.4, '2020-07-21 00:00:00', 97),
(24, 413.8, '2020-12-16 00:00:00', 10),
(25, 241.1, '2021-01-28 00:00:00', 62),
(26, 453.9, '2020-07-13 00:00:00', 43),
(27, 501.4, '2020-11-06 00:00:00', 78),
(28, 455.4, '2020-06-15 00:00:00', 38),
(29, 363.5, '2020-10-18 00:00:00', 52),
(30, 470.3, '2021-02-05 00:00:00', 98),
(31, 136.3, '2020-11-05 00:00:00', 75),
(32, 315.4, '2021-03-15 00:00:00', 37),
(33, 465.1, '2021-02-27 00:00:00', 89),
(34, 123.3, '2021-04-24 00:00:00', 57),
(35, 690, '2020-06-05 00:00:00', 1),
(36, 675.4, '2020-09-09 00:00:00', 23),
(37, 704.1, '2021-02-13 00:00:00', 36),
(38, 304.7, '2020-12-17 00:00:00', 43),
(39, 252.4, '2020-05-27 00:00:00', 7),
(40, 118.4, '2021-04-14 00:00:00', 74),
(41, 561.7, '2021-01-22 00:00:00', 41),
(42, 391.1, '2020-10-13 00:00:00', 15),
(43, 501.8, '2020-12-19 00:00:00', 64),
(44, 743.1, '2021-04-21 00:00:00', 6),
(45, 665.1, '2021-03-06 00:00:00', 44),
(46, 168.9, '2020-09-19 00:00:00', 21),
(47, 415.6, '2020-11-20 00:00:00', 7),
(48, 543.2, '2020-08-23 00:00:00', 8),
(49, 502.3, '2021-03-08 00:00:00', 1),
(50, 144.3, '2020-07-09 00:00:00', 84),
(51, 543.1, '2020-06-04 00:00:00', 33),
(52, 378.7, '2021-03-19 00:00:00', 30),
(53, 293.7, '2021-02-14 00:00:00', 78),
(54, 209.9, '2021-03-05 00:00:00', 74),
(55, 247.6, '2020-09-14 00:00:00', 94),
(56, 685.4, '2021-01-19 00:00:00', 55),
(57, 166.6, '2020-05-22 00:00:00', 72),
(58, 696.4, '2020-11-02 00:00:00', 46),
(59, 429.3, '2020-05-30 00:00:00', 29),
(60, 440.8, '2020-12-07 00:00:00', 96),
(61, 162.2, '2021-05-04 00:00:00', 22),
(62, 162.1, '2020-05-30 00:00:00', 66),
(63, 359.1, '2020-10-09 00:00:00', 25),
(64, 345.3, '2021-03-25 00:00:00', 99),
(65, 183.3, '2021-05-02 00:00:00', 73),
(66, 224.6, '2020-08-28 00:00:00', 60),
(67, 665.3, '2020-07-04 00:00:00', 22),
(68, 399.3, '2021-01-08 00:00:00', 26),
(69, 348.7, '2020-11-04 00:00:00', 29),
(70, 204.5, '2021-05-17 00:00:00', 33),
(71, 134.7, '2020-07-19 00:00:00', 99),
(72, 606, '2020-05-27 00:00:00', 99),
(73, 729, '2020-11-18 00:00:00', 32),
(74, 391.8, '2020-10-13 00:00:00', 96),
(75, 121.2, '2021-01-29 00:00:00', 49),
(76, 473, '2020-12-11 00:00:00', 6),
(77, 229.1, '2020-11-11 00:00:00', 23),
(78, 125.5, '2021-02-25 00:00:00', 68),
(79, 567.5, '2020-10-08 00:00:00', 88),
(80, 112.7, '2020-12-30 00:00:00', 44),
(81, 546.8, '2021-05-06 00:00:00', 52),
(82, 181.6, '2021-01-15 00:00:00', 47),
(83, 464.8, '2020-07-09 00:00:00', 23),
(84, 794.4, '2021-03-19 00:00:00', 80),
(85, 421.1, '2020-09-30 00:00:00', 95),
(86, 540.9, '2020-10-13 00:00:00', 26),
(87, 347.7, '2020-12-10 00:00:00', 77),
(88, 637.5, '2021-02-20 00:00:00', 86),
(89, 524.3, '2020-07-03 00:00:00', 41),
(90, 499.5, '2021-04-17 00:00:00', 37),
(91, 190.8, '2020-07-27 00:00:00', 32),
(92, 741.5, '2020-11-11 00:00:00', 48),
(93, 336.4, '2020-09-06 00:00:00', 13),
(94, 413.2, '2021-05-16 00:00:00', 54),
(95, 399.1, '2020-12-03 00:00:00', 27),
(96, 114.3, '2020-07-05 00:00:00', 66),
(97, 526.3, '2021-03-18 00:00:00', 20),
(98, 311.7, '2020-12-28 00:00:00', 83),
(99, 411, '2020-07-19 00:00:00', 7),
(100, 636.3, '2020-08-10 00:00:00', 61);

-- --------------------------------------------------------

--
-- Structure de la table `entrepreneurs`
--

DROP TABLE IF EXISTS `entrepreneurs`;
CREATE TABLE IF NOT EXISTS `entrepreneurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomE` varchar(255) NOT NULL,
  `numeroRueE` int(11) NOT NULL,
  `rueE` varchar(255) NOT NULL,
  `villeE` varchar(255) NOT NULL,
  `codePostalE` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `utilisateurId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `utilisateurId` (`utilisateurId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `entrepreneurs`
--

INSERT INTO `entrepreneurs` (`id`, `nomE`, `numeroRueE`, `rueE`, `villeE`, `codePostalE`, `createdAt`, `updatedAt`, `utilisateurId`) VALUES
(1, 'BullMark LatAm Select Leaders ETF', 289, 'Maple', 'Porto Ferreira', 2525, '2021-12-24 00:00:00', '2021-11-22 00:00:00', 30),
(2, 'IntriCon Corporation', 60, 'Mallory', 'Letsheng', 6781, '2021-09-10 00:00:00', '2022-01-15 00:00:00', 72),
(3, 'T-Mobile US, Inc.', 53, 'Bartelt', 'Santa Lucia', 5799, '2021-12-07 00:00:00', '2021-06-17 00:00:00', 61),
(4, 'Boot Barn Holdings, Inc.', 215, 'Dahle', 'Dushu', 6792, '2021-11-27 00:00:00', '2021-09-23 00:00:00', 62),
(5, 'Blackrock Enhanced Equity Dividend Trust', 183, 'Crescent Oaks', 'Shigongqiao', 6760, '2021-08-18 00:00:00', '2021-12-25 00:00:00', 65),
(6, 'FirstEnergy Corporation', 58, 'Harper', 'Autun', 2649, '2021-06-29 00:00:00', '2021-12-03 00:00:00', 94),
(7, 'Unity Bancorp, Inc.', 289, 'Merrick', 'Gaspar', 4028, '2021-08-16 00:00:00', '2021-12-18 00:00:00', 89),
(8, 'Financial Engines, Inc.', 205, 'Basil', 'San Lorenzo', 7322, '2021-10-30 00:00:00', '2021-07-19 00:00:00', 98),
(9, 'Kelly Services, Inc.', 46, 'Monterey', 'Rancabolang', 7608, '2022-03-18 00:00:00', '2021-05-21 00:00:00', 73),
(10, 'CABCO Series 2004-101 Trust', 198, 'Dorton', 'Karangsumber', 4165, '2022-05-13 00:00:00', '2021-12-02 00:00:00', 82),
(11, 'Ritchie Bros. Auctioneers Incorporated', 62, 'Texas', 'Beigong', 4086, '2021-08-04 00:00:00', '2021-10-06 00:00:00', 93),
(12, 'National Energy Services Reunited Corp.', 180, 'Bayside', 'Hougong', 3448, '2021-12-23 00:00:00', '2022-01-12 00:00:00', 50),
(13, 'Bancorp 34, Inc.', 50, 'Goodland', 'San Miguel', 4105, '2021-07-17 00:00:00', '2021-12-24 00:00:00', 27),
(14, 'Fastenal Company', 299, 'Green Ridge', 'Tindog', 3616, '2022-01-25 00:00:00', '2021-06-26 00:00:00', 20),
(15, 'Alphatec Holdings, Inc.', 32, 'Pennsylvania', 'Sawang Daen Din', 7631, '2021-07-17 00:00:00', '2021-10-04 00:00:00', 12),
(16, 'NorthWestern Corporation', 130, 'Goodland', 'San Francisco Zapotitlán', 2317, '2021-08-30 00:00:00', '2022-03-05 00:00:00', 35),
(17, 'Gafisa SA', 40, 'Stone Corner', 'Malakwal City', 6936, '2021-09-02 00:00:00', '2022-01-03 00:00:00', 81),
(18, 'iPath US Treasury Long Bond Bull ETN', 274, 'Dayton', 'Dingtao', 1954, '2022-01-17 00:00:00', '2022-03-13 00:00:00', 36),
(19, 'Nuveen Short Duration Credit Opportunities Fund', 280, 'Huxley', 'Plandi', 7259, '2021-12-25 00:00:00', '2022-04-26 00:00:00', 32),
(20, 'Bel Fuse Inc.', 273, 'Schurz', 'Jiutai', 3781, '2021-07-16 00:00:00', '2021-11-03 00:00:00', 19);

-- --------------------------------------------------------

--
-- Structure de la table `lignecommandes`
--

DROP TABLE IF EXISTS `lignecommandes`;
CREATE TABLE IF NOT EXISTS `lignecommandes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantite` int(11) NOT NULL,
  `prix` double NOT NULL,
  `commandeId` int(11) DEFAULT NULL,
  `produitId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `commandeId` (`commandeId`),
  KEY `produitId` (`produitId`)
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lignecommandes`
--

INSERT INTO `lignecommandes` (`id`, `quantite`, `prix`, `commandeId`, `produitId`) VALUES
(1, 6, 55.4, 94, 34),
(2, 6, 19.3, 96, 41),
(3, 5, 36.7, 39, 88),
(4, 5, 46.6, 44, 91),
(5, 5, 80.1, 24, 20),
(6, 1, 48.6, 31, 79),
(7, 10, 50.9, 70, 39),
(8, 6, 64.8, 98, 35),
(9, 1, 27.3, 62, 17),
(10, 6, 64.6, 14, 46),
(11, 8, 19.9, 64, 39),
(12, 6, 86.2, 53, 75),
(13, 1, 17.7, 68, 99),
(14, 6, 17.4, 44, 26),
(15, 6, 22.5, 20, 57),
(16, 2, 94.2, 43, 85),
(17, 8, 19.9, 79, 9),
(18, 4, 57.1, 61, 17),
(19, 10, 28.8, 31, 68),
(20, 5, 93.6, 99, 86),
(21, 7, 27.4, 75, 15),
(22, 7, 57.4, 45, 18),
(23, 10, 62.1, 44, 56),
(24, 1, 25.5, 98, 42),
(25, 3, 93.1, 39, 67),
(26, 9, 31.9, 54, 25),
(27, 2, 84.3, 27, 46),
(28, 7, 12.8, 2, 90),
(29, 3, 89.5, 52, 18),
(30, 6, 21, 46, 62),
(31, 1, 94.6, 74, 15),
(32, 9, 69.1, 78, 83),
(33, 8, 35, 12, 74),
(34, 6, 48.9, 78, 43),
(35, 7, 19.2, 25, 28),
(36, 2, 83.1, 39, 62),
(37, 7, 91, 61, 93),
(38, 8, 14.6, 19, 3),
(39, 9, 18, 45, 19),
(40, 5, 15.1, 97, 39),
(41, 2, 54.7, 24, 8),
(42, 9, 29.1, 2, 37),
(43, 6, 52.2, 60, 54),
(44, 2, 53.2, 58, 21),
(45, 2, 98.8, 61, 38),
(46, 8, 18.1, 1, 8),
(47, 4, 43.7, 79, 19),
(48, 6, 42.1, 73, 65),
(49, 2, 27.8, 75, 13),
(50, 9, 28.7, 65, 73),
(51, 10, 74.2, 79, 53),
(52, 5, 87.1, 20, 55),
(53, 7, 44.8, 79, 63),
(54, 9, 71, 32, 5),
(55, 8, 77.5, 93, 89),
(56, 5, 25.3, 31, 46),
(57, 8, 88.6, 46, 57),
(58, 8, 45.3, 77, 8),
(59, 1, 84.5, 35, 13),
(60, 2, 96.7, 75, 1),
(61, 6, 64.7, 92, 61),
(62, 10, 92.6, 63, 69),
(63, 6, 13.3, 45, 5),
(64, 9, 34.1, 12, 54),
(65, 1, 77.3, 88, 68),
(66, 3, 38, 93, 78),
(67, 9, 34.1, 72, 68),
(68, 7, 69.8, 18, 88),
(69, 5, 76.3, 19, 89),
(70, 5, 31.4, 53, 92),
(71, 7, 23.5, 80, 34),
(72, 10, 82.4, 79, 51),
(73, 7, 12.9, 93, 90),
(74, 4, 44.1, 73, 56),
(75, 7, 23.3, 95, 80),
(76, 10, 97.6, 60, 99),
(77, 5, 81, 17, 53),
(78, 4, 60.2, 81, 13),
(79, 5, 37.1, 97, 35),
(80, 1, 59.5, 83, 30),
(81, 1, 21.6, 61, 60),
(82, 4, 62.8, 26, 55),
(83, 1, 48.1, 15, 5),
(84, 7, 70.5, 77, 76),
(85, 4, 91.7, 13, 6),
(86, 3, 47.6, 93, 56),
(87, 9, 79.2, 7, 94),
(88, 9, 18.9, 52, 72),
(89, 6, 12.7, 88, 17),
(90, 1, 38.7, 71, 26),
(91, 9, 92.5, 55, 54),
(92, 7, 69.8, 86, 58),
(93, 4, 18.8, 26, 80),
(94, 2, 60, 83, 74),
(95, 9, 71.4, 27, 43),
(96, 7, 69.5, 95, 11),
(97, 5, 57.3, 28, 76),
(98, 7, 75.4, 86, 32),
(99, 3, 49.7, 69, 10),
(100, 5, 47.1, 74, 36),
(101, 8, 72.1, 25, 79),
(102, 5, 69.2, 92, 99),
(103, 2, 43.9, 21, 69),
(104, 6, 18.8, 7, 11),
(105, 7, 15.6, 75, 19),
(106, 1, 57.1, 5, 72),
(107, 6, 15.1, 27, 42),
(108, 6, 83.2, 99, 49),
(109, 9, 41.7, 77, 49),
(110, 4, 11.9, 48, 48),
(111, 5, 56.9, 64, 76),
(112, 8, 80.5, 64, 98),
(113, 8, 94.2, 5, 39),
(114, 10, 36.2, 23, 82),
(115, 1, 15.7, 70, 95),
(116, 8, 24.4, 20, 92),
(117, 5, 13.3, 24, 84),
(118, 6, 57.5, 66, 23),
(119, 10, 63.5, 19, 89),
(120, 6, 76.7, 87, 91),
(121, 5, 72.5, 9, 93),
(122, 9, 21.3, 86, 10),
(123, 9, 50, 76, 55),
(124, 1, 45.5, 17, 5),
(125, 5, 47.2, 48, 84),
(126, 4, 97.4, 11, 45),
(127, 9, 91.6, 51, 41),
(128, 10, 29.3, 35, 56),
(129, 5, 69.2, 83, 73),
(130, 6, 43.3, 70, 21),
(131, 10, 36.1, 9, 25),
(132, 3, 92, 80, 99),
(133, 7, 56.2, 54, 74),
(134, 9, 71.5, 57, 50),
(135, 5, 99.7, 95, 19),
(136, 4, 36, 42, 63),
(137, 6, 34.3, 75, 46),
(138, 2, 81.3, 41, 59),
(139, 6, 80.4, 49, 11),
(140, 10, 20.9, 70, 31),
(141, 3, 13.8, 3, 86),
(142, 5, 81.1, 53, 1),
(143, 1, 31.8, 36, 94),
(144, 8, 42.4, 18, 11),
(145, 1, 78.2, 72, 81),
(146, 8, 60.7, 33, 46),
(147, 2, 57.6, 75, 25),
(148, 9, 66.6, 19, 38),
(149, 10, 26, 77, 20),
(150, 9, 10.8, 53, 82),
(151, 2, 83.8, 56, 22),
(152, 9, 19.9, 34, 83),
(153, 3, 46.1, 76, 88),
(154, 7, 90.7, 95, 86),
(155, 7, 11.2, 76, 1),
(156, 6, 36.1, 83, 12),
(157, 6, 49.1, 50, 83),
(158, 8, 12.4, 23, 94),
(159, 10, 37.8, 82, 52),
(160, 2, 30.6, 70, 43),
(161, 6, 23.5, 96, 58),
(162, 2, 46.9, 43, 59),
(163, 5, 25.6, 58, 52),
(164, 2, 67.8, 50, 85),
(165, 9, 12.5, 2, 80),
(166, 4, 55, 65, 38),
(167, 6, 97.4, 40, 60),
(168, 6, 28.2, 2, 62),
(169, 4, 79.3, 57, 93),
(170, 9, 57, 70, 27),
(171, 7, 99.2, 89, 14),
(172, 10, 69.2, 2, 72),
(173, 1, 53, 83, 4),
(174, 3, 56.1, 31, 29),
(175, 8, 11.9, 31, 61),
(176, 1, 33, 36, 4),
(177, 4, 98.9, 27, 69),
(178, 4, 99.1, 1, 16),
(179, 4, 18.3, 97, 97),
(180, 9, 95.1, 76, 32),
(181, 3, 25.7, 23, 38),
(182, 4, 27, 28, 50),
(183, 2, 41.4, 87, 83),
(184, 9, 70.3, 6, 53),
(185, 9, 83.8, 60, 58),
(186, 10, 36.5, 94, 68),
(187, 5, 72, 14, 61),
(188, 10, 83.2, 32, 78),
(189, 9, 77.5, 77, 68),
(190, 2, 61.8, 35, 23),
(191, 9, 95, 82, 51),
(192, 5, 22, 41, 41),
(193, 8, 66.7, 85, 31),
(194, 8, 78.5, 31, 41),
(195, 10, 59.2, 57, 74),
(196, 10, 39.4, 28, 80),
(197, 5, 77.1, 76, 12),
(198, 9, 33.1, 5, 26),
(199, 2, 33.3, 9, 88),
(200, 10, 16.8, 45, 72),
(201, 3, 83.3, 40, 89),
(202, 3, 43.8, 49, 29),
(203, 8, 62.8, 39, 93),
(204, 10, 41.3, 33, 21),
(205, 6, 58.8, 45, 46),
(206, 5, 83.8, 88, 40),
(207, 10, 43.8, 95, 30),
(208, 9, 67.1, 49, 35),
(209, 6, 46.1, 60, 50),
(210, 9, 60.2, 98, 27),
(211, 9, 88, 68, 52),
(212, 2, 97.2, 51, 45),
(213, 4, 90.1, 45, 13),
(214, 3, 26.2, 76, 11),
(215, 2, 65, 74, 10),
(216, 1, 32.7, 5, 2),
(217, 9, 93.7, 37, 52),
(218, 10, 88.1, 18, 99),
(219, 4, 30.9, 55, 53),
(220, 8, 57.8, 67, 98),
(221, 4, 20.3, 23, 83),
(222, 7, 49.3, 96, 5),
(223, 2, 46.9, 92, 50),
(224, 4, 65.2, 57, 95),
(225, 7, 92.2, 70, 21),
(226, 3, 28.8, 72, 9),
(227, 1, 75.1, 62, 55),
(228, 5, 48.4, 51, 11),
(229, 5, 74.3, 73, 77),
(230, 8, 64.3, 99, 13),
(231, 5, 72.6, 59, 15),
(232, 2, 83.1, 18, 26),
(233, 6, 82.2, 45, 67),
(234, 6, 86, 46, 92),
(235, 1, 72.6, 67, 14),
(236, 1, 37.5, 69, 97),
(237, 4, 38.3, 44, 23),
(238, 3, 40, 20, 47),
(239, 5, 73.2, 82, 74),
(240, 10, 84.9, 20, 86),
(241, 6, 32.9, 84, 2),
(242, 8, 34.2, 57, 27),
(243, 1, 35.9, 95, 61),
(244, 5, 29.1, 17, 58),
(245, 3, 19.5, 40, 58),
(246, 8, 52.2, 51, 47),
(247, 8, 98.2, 6, 98),
(248, 8, 27.7, 30, 5),
(249, 6, 43.2, 54, 97),
(250, 1, 93.3, 7, 27),
(251, 9, 84.9, 64, 75),
(252, 1, 83.9, 26, 87),
(253, 7, 38.2, 67, 34),
(254, 7, 34.9, 30, 17),
(255, 4, 20.1, 69, 80),
(256, 4, 16.5, 4, 78),
(257, 10, 21.3, 95, 59),
(258, 1, 52.7, 19, 5),
(259, 7, 19.2, 83, 2),
(260, 3, 58.2, 92, 44),
(261, 5, 12.9, 71, 97),
(262, 10, 66.6, 62, 100),
(263, 7, 62.8, 32, 60),
(264, 9, 45.8, 31, 78),
(265, 1, 20.5, 68, 94),
(266, 5, 28.3, 47, 38),
(267, 2, 48.4, 98, 37),
(268, 10, 78, 60, 73),
(269, 2, 81.4, 94, 22),
(270, 7, 84.6, 70, 33),
(271, 4, 43.9, 92, 8),
(272, 1, 81.6, 48, 31),
(273, 6, 84.7, 100, 51),
(274, 8, 59.1, 4, 26),
(275, 4, 10.7, 83, 79),
(276, 1, 60.5, 38, 78),
(277, 4, 73.4, 81, 66),
(278, 5, 17.9, 60, 42),
(279, 3, 34.7, 8, 28),
(280, 1, 12, 66, 61),
(281, 1, 60.2, 81, 52),
(282, 10, 64.5, 14, 25),
(283, 2, 30.1, 4, 3),
(284, 8, 43.8, 6, 36),
(285, 2, 19.2, 56, 62),
(286, 8, 93.2, 76, 45),
(287, 8, 68.8, 99, 88),
(288, 10, 19.6, 1, 70),
(289, 4, 47.3, 57, 33),
(290, 10, 42.9, 83, 2),
(291, 8, 79.5, 99, 43),
(292, 6, 35.7, 48, 2),
(293, 2, 20.4, 62, 61),
(294, 1, 93.1, 51, 31),
(295, 8, 77.8, 3, 42),
(296, 8, 48.6, 69, 99),
(297, 7, 53.7, 9, 11),
(298, 9, 75.9, 73, 46),
(299, 8, 59.6, 41, 4),
(300, 9, 22.2, 13, 79);

-- --------------------------------------------------------

--
-- Structure de la table `livraisons`
--

DROP TABLE IF EXISTS `livraisons`;
CREATE TABLE IF NOT EXISTS `livraisons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numeroRueL` int(11) NOT NULL,
  `rueL` varchar(255) NOT NULL,
  `villeL` varchar(255) NOT NULL,
  `codePostalL` int(11) NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `commandeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `commandeId` (`commandeId`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `livraisons`
--

INSERT INTO `livraisons` (`id`, `numeroRueL`, `rueL`, `villeL`, `codePostalL`, `statut`, `commandeId`) VALUES
(1, 266, 'Karstens', 'Ostankinskiy', 3120, 1, 1),
(2, 55, '6th', 'Visby', 6948, 0, 2),
(3, 108, 'Pierstorff', 'Los Frentones', 4294, 0, 3),
(4, 337, 'Kenwood', 'Solec Nad Wis??', 7305, 1, 4),
(5, 127, 'Judy', 'Beolgyo', 7463, 1, 5),
(6, 31, 'Eastwood', 'Berlin', 6868, 1, 6),
(7, 206, 'Larry', 'Del Valle', 5533, 0, 7),
(8, 296, 'Buhler', 'Mancos', 5881, 0, 8),
(9, 341, 'Debs', 'Pancoran', 1229, 1, 9),
(10, 113, 'Village', 'Kitaky?sh?', 3647, 1, 10),
(11, 146, 'Ridge Oak', 'Praia da Barra', 1305, 0, 11),
(12, 65, 'Valley Edge', 'Waihi', 1840, 0, 12),
(13, 220, 'Russell', 'Changqiao', 1553, 0, 13),
(14, 320, 'Havey', 'Shajing', 6791, 1, 14),
(15, 297, 'Comanche', 'Brooklyn', 7667, 0, 15),
(16, 120, 'Dorton', 'Tanxi', 3514, 0, 16),
(17, 340, 'Manufacturers', 'Aurora', 4156, 0, 17),
(18, 9, 'Kensington', 'Guaranésia', 3683, 0, 18),
(19, 28, 'Fairview', 'Gorna Oryakhovitsa', 6852, 1, 19),
(20, 165, 'Bobwhite', 'Jugezhuang', 6451, 1, 20),
(21, 123, 'Sycamore', 'Dire Dawa', 4475, 1, 21),
(22, 336, 'Debra', 'Fresno', 6382, 1, 22),
(23, 197, 'Duke', 'Mahendranagar', 6686, 1, 23),
(24, 260, 'Transport', 'Inari', 5629, 0, 24),
(25, 185, 'Division', 'Cigintung', 2741, 1, 25),
(26, 115, 'Jay', 'Hongqi', 2685, 1, 26),
(27, 262, 'Evergreen', 'Krasnorechenskiy', 6268, 0, 27),
(28, 157, 'Gina', 'Inicbulan', 5822, 1, 28),
(29, 120, 'Bobwhite', 'Mianhu', 6914, 1, 29),
(30, 293, 'Carioca', 'Vesoul', 4018, 0, 30),
(31, 214, 'Hauk', 'Haveluloto', 6348, 0, 31),
(32, 138, 'Clove', 'Gorzów Wielkopolski', 4523, 1, 32),
(33, 245, 'Nova', 'Wenqiao', 7850, 0, 33),
(34, 173, 'Glacier Hill', 'Ilare', 6010, 0, 34),
(35, 260, 'Ridgeway', 'Taranovskoye', 6363, 0, 35),
(36, 3, 'Clarendon', 'Casalinho', 3377, 1, 36),
(37, 302, 'Lukken', 'Ubud', 4871, 1, 37),
(38, 202, 'Fremont', 'Nong Phai', 2990, 1, 38),
(39, 346, 'Sauthoff', 'Bayonne', 7448, 1, 39),
(40, 167, 'Lunder', 'Dunhao', 3577, 1, 40),
(41, 25, 'Tennessee', '?tsuchi', 3375, 0, 41),
(42, 161, 'Toban', 'Suya', 6112, 1, 42),
(43, 306, 'Lotheville', 'Kranggan', 2323, 0, 43),
(44, 123, 'Clove', 'Kambar', 4831, 0, 44),
(45, 4, 'Prairieview', 'Sandakan', 7769, 1, 45),
(46, 128, 'Moulton', 'Milwaukee', 3726, 0, 46),
(47, 22, 'Elgar', 'Singkup', 3763, 0, 47),
(48, 58, 'Corben', 'Neglasari', 4283, 1, 48),
(49, 113, 'Morningstar', 'Marseille', 6079, 1, 49),
(50, 189, 'Basil', 'Tanzhou', 3814, 1, 50),
(51, 317, 'Saint Paul', 'Mad?nat ?amad', 1796, 0, 51),
(52, 229, 'Crownhardt', 'Camaçari', 6760, 1, 52),
(53, 169, 'Sauthoff', 'Kamenický Šenov', 2915, 1, 53),
(54, 273, 'Sherman', 'Pishaj', 4242, 0, 54),
(55, 123, 'East', 'Horad Smalyavichy', 7689, 1, 55),
(56, 8, 'Arrowood', 'London', 5214, 0, 56),
(57, 312, 'Lighthouse Bay', 'Pailou', 3847, 0, 57),
(58, 241, 'Kinsman', 'Junik', 6956, 0, 58),
(59, 132, 'Crowley', 'Las Vegas', 1883, 1, 59),
(60, 24, 'Tennessee', 'Vicente Guerrero', 6484, 1, 60),
(61, 106, 'Hintze', 'Stare Kurowo', 7871, 1, 61),
(62, 68, 'Green Ridge', 'Madison', 1880, 0, 62),
(63, 54, 'Maple', 'Arraial do Cabo', 5120, 1, 63),
(64, 226, 'Victoria', 'Qixingtai', 4716, 1, 64),
(65, 88, 'Elka', 'Qinglung', 1498, 0, 65),
(66, 268, 'Washington', 'Loma Bonita', 4774, 1, 66),
(67, 272, 'Armistice', 'Gulao', 1680, 0, 67),
(68, 350, 'Sheridan', 'Massy', 2607, 0, 68),
(69, 93, 'Barnett', 'Mi?dzybrodzie Bialskie', 5955, 1, 69),
(70, 54, 'Summerview', 'Cagdianao', 1775, 1, 70),
(71, 209, 'Novick', 'Padangan', 6564, 1, 71),
(72, 95, 'Quincy', 'Slatina', 2469, 1, 72),
(73, 68, 'Daystar', 'Trakai', 3187, 0, 73),
(74, 258, 'Ryan', 'El Porvenir', 2653, 1, 74),
(75, 21, 'Londonderry', 'Jiashi', 4618, 0, 75),
(76, 292, 'Blaine', 'Tabu', 5808, 1, 76),
(77, 277, 'Harper', 'Huangzhuang', 4980, 0, 77),
(78, 322, 'David', 'Darungan', 3785, 1, 78),
(79, 215, 'Dovetail', 'Huangtan', 4080, 1, 79),
(80, 304, 'Crescent Oaks', 'Ardazubre', 7819, 0, 80),
(81, 246, 'Rieder', 'Weichanglu', 4896, 0, 81),
(82, 104, 'David', 'Melrose', 4419, 0, 82),
(83, 20, 'Old Gate', 'Lincheng', 1377, 1, 83),
(84, 256, 'Gerald', 'Kitaky?sh?', 5359, 1, 84),
(85, 260, 'Red Cloud', 'Barroco', 1814, 0, 85),
(86, 264, 'Monument', 'Rungis', 2346, 0, 86),
(87, 213, 'Harper', 'Pamiers', 4689, 0, 87),
(88, 75, 'Ryan', 'Tyszowce', 6215, 1, 88),
(89, 20, 'Morningstar', 'Miki', 4171, 0, 89),
(90, 175, 'Declaration', 'Sumurgeneng', 4660, 1, 90),
(91, 279, 'Sheridan', 'Salavat', 3483, 1, 91),
(92, 291, 'Swallow', 'Debar', 3584, 1, 92),
(93, 126, 'Crowley', 'Leipzig', 1832, 1, 93),
(94, 175, 'Muir', 'Kakan', 6369, 0, 94),
(95, 23, 'Oakridge', 'Barusuda', 3629, 0, 95),
(96, 218, 'Green Ridge', 'Urpay', 2999, 0, 96),
(97, 348, 'Mandrake', 'Maopingchang', 5027, 1, 97),
(98, 266, 'Redwing', 'Changtang', 2450, 1, 98),
(99, 257, 'Clemons', 'Horokhiv', 5208, 0, 99),
(100, 291, 'Reinke', 'Darenzhuang', 5169, 1, 100);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `prix` double NOT NULL,
  `quantite` int(11) NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `categorieId` int(11) DEFAULT NULL,
  `entrepreneurId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categorieId` (`categorieId`),
  KEY `entrepreneurId` (`entrepreneurId`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `description`, `prix`, `quantite`, `statut`, `categorieId`, `entrepreneurId`) VALUES
(1, 'Rock Buckwheat', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 99.8, 75, 0, 3, 13),
(2, 'Bog Beggarticks', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 29.7, 79, 0, 12, 8),
(3, 'Alpine Milkvetch', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 25.1, 53, 1, 4, 10),
(4, 'Fringed Brome', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 57.5, 21, 0, 9, 5),
(5, 'Western Germander', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 94.4, 128, 0, 3, 17),
(6, 'Franklin Tree', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 43.1, 116, 1, 6, 5),
(7, 'Silk Bay', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 67.7, 20, 0, 5, 14),
(8, 'Welsh Mudwort', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 43.9, 45, 0, 12, 18),
(9, 'Map Lichen', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 25.5, 148, 0, 13, 4),
(10, 'Great Basin Popcornflower', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 67.4, 1, 0, 7, 11),
(11, 'Arkansas Ironweed', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 99.3, 82, 0, 12, 14),
(12, 'Zigzag Iris', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 96.3, 163, 1, 12, 9),
(13, 'Dubautia', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 87.1, 47, 1, 7, 18),
(14, 'Lycaste', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 15.5, 9, 1, 10, 14),
(15, 'Alaska Wormwood', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 10.5, 121, 0, 11, 8),
(16, 'Richwoods Sedge', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 86, 165, 0, 7, 1),
(17, 'Woolly Cinquefoil', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 85, 138, 1, 12, 6),
(18, 'Queen\'s-wreath', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1.6, 46, 1, 6, 3),
(19, 'Panicledleaf Ticktrefoil', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 43.3, 73, 0, 7, 11),
(20, 'Purple Cowpea', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 18.8, 138, 1, 11, 9),
(21, 'Dark-fruited Cotoneaster', 'Fusce consequat. Nulla nisl. Nunc nisl.', 2.4, 74, 0, 3, 10),
(22, 'Queen Anne\'s Lace', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 54.8, 185, 0, 11, 13),
(23, 'Disc Lichen', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 42.8, 146, 1, 9, 9),
(24, 'Mt. Lassen Fleabane', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 7.1, 17, 1, 7, 7),
(25, 'Ward\'s Beardtongue', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 86.9, 22, 1, 1, 6),
(26, 'Yavapai County Buckwheat', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 14, 129, 1, 5, 19),
(27, 'Hilend\'s Bedstraw', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 16.8, 166, 0, 10, 17),
(28, 'Island Brittleleaf', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 65.7, 118, 0, 4, 7),
(29, 'Winged Elm', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 93.6, 80, 1, 13, 4),
(30, 'Marigold', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 88.4, 170, 0, 3, 6),
(31, 'Crested Cinquefoil', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 91, 121, 0, 9, 9),
(32, 'Arctic Trichostomum Moss', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 95.7, 79, 1, 9, 15),
(33, 'Silverleaf Cotoneaster', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 83, 177, 0, 12, 3),
(34, 'Santa Barbara Island Buckwheat', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 56.6, 195, 1, 4, 15),
(35, 'Caddo False Foxglove', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 65.3, 132, 0, 4, 9),
(36, 'Pondweed', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 36, 107, 1, 4, 7),
(37, 'Garfield Lupine', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 58.5, 146, 1, 11, 8),
(38, 'Velvety Goldenrod', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 66.3, 135, 0, 5, 10),
(39, 'Mielichhofer\'s Copper Moss', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 58.3, 76, 0, 12, 13),
(40, 'Giant Wakerobin', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 48.7, 85, 0, 9, 7),
(41, 'Cusick\'s Checkerbloom', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 88.9, 48, 1, 4, 6),
(42, 'Livermore Nailwort', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 30.4, 156, 0, 13, 1),
(43, 'Thevetia', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 99.8, 111, 1, 13, 7),
(44, 'Crested Floatingheart', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 80.8, 167, 0, 9, 11),
(45, 'Whiteflower Navelwort', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 86.3, 133, 1, 3, 6),
(46, 'Pond Cypress', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 87.3, 152, 1, 2, 5),
(47, 'Ebony Diospyros', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 12.1, 113, 1, 10, 15),
(48, 'Trypelthelium Lichen', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 26.3, 71, 0, 7, 19),
(49, 'Calico Aster', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 70, 168, 0, 7, 9),
(50, 'Mogollon Mountain Vetch', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 47.7, 62, 0, 10, 9),
(51, 'San Luis Blazingstar', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 62.4, 43, 0, 1, 13),
(52, 'Spring Mountain Aster', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 61.4, 51, 0, 1, 4),
(53, 'Milkthistle', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 82.5, 138, 1, 7, 5),
(54, 'Royal Larkspur', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 55, 137, 0, 4, 16),
(55, 'Redflower Buckwheat', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 16.2, 95, 0, 8, 6),
(56, 'American Nailwort', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 68.6, 81, 0, 10, 8),
(57, 'Rock Buckwheat', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 21.7, 20, 0, 11, 18),
(58, 'Orinoco Jute', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 94.2, 99, 0, 2, 18),
(59, 'Chautle Livingrock', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 91, 97, 0, 13, 10),
(60, 'Christmastree Plant', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 88.4, 188, 1, 1, 6),
(61, 'Umbel Clerodendrum', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 83.5, 140, 0, 11, 14),
(62, 'Lescuraea Moss', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 69.2, 157, 0, 1, 17),
(63, 'Don Quixote\'s Lace', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1.4, 196, 0, 6, 7),
(64, 'Western Bladderpod', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 43.7, 19, 1, 1, 20),
(65, 'Hillebrandia', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 84.1, 83, 1, 8, 18),
(66, 'Thoroughwort', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 95.6, 141, 1, 7, 6),
(67, 'Abata Cola', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 64.2, 195, 1, 3, 10),
(68, 'Woodfern', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 57, 141, 0, 7, 2),
(69, 'Tall Annual Willowherb', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 66.1, 144, 1, 5, 4),
(70, 'Cutleaf Coneflower', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1.5, 132, 1, 4, 17),
(71, 'Tortella Moss', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 27.6, 129, 0, 3, 2),
(72, 'Rinodina Lichen', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 91.9, 131, 0, 7, 14),
(73, 'Virginia Fanpetals', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 55.3, 133, 0, 11, 4),
(74, 'Running Mountaingrass', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 16.2, 113, 1, 7, 18),
(75, 'Rock Stitchwort', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 35.8, 5, 0, 4, 9),
(76, 'Sticky Monkeyflower', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 20.5, 178, 1, 6, 2),
(77, 'Pore Lichen', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 79.4, 184, 1, 9, 13),
(78, 'Antidaphne', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 56.1, 8, 0, 1, 7),
(79, 'Guazuma', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 15.6, 179, 1, 13, 6),
(80, 'Scarlet Monkeyflower', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 59, 37, 0, 5, 18),
(81, 'Colorado Barberry', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 85.9, 123, 1, 2, 3),
(82, 'Limestone Goldenrod', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 23.1, 72, 0, 4, 1),
(83, 'Regal Pelargonium', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 79.8, 188, 1, 9, 15),
(84, 'Gairdner\'s Beardtongue', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis', 22, 151, 1, 13, 4),
(85, 'Meadow Garlic', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 13.9, 22, 0, 11, 7),
(86, 'Fringed Rockdaisy', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 59.6, 37, 0, 9, 9),
(87, 'Scarlet Oak', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 17.8, 171, 0, 4, 8),
(88, 'Rim Lichen', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 77.9, 33, 0, 5, 10),
(89, 'Hovenia', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 9.2, 132, 0, 7, 5),
(90, 'Clasping Arnica', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 36.9, 38, 0, 8, 2),
(91, 'Haid\'s Amygdalaria Lichen', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 34, 198, 0, 10, 2),
(92, 'Douglas\' Mesamint', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 18.5, 164, 0, 4, 8),
(93, 'Sandysoil Suncup', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 21, 30, 0, 12, 13),
(94, 'Wild Sarsaparilla', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 39.1, 118, 1, 1, 3),
(95, 'Gila Rockdaisy', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 29.7, 66, 0, 3, 9),
(96, 'Pale Blue-eyed Grass', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 75.7, 94, 1, 7, 14),
(97, 'Longtongue Muhly', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 57.7, 101, 0, 7, 1),
(98, 'Cup Lichen', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 35.6, 14, 1, 8, 14),
(99, 'Guadalupe Waternymph', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 45.1, 73, 1, 3, 16),
(100, 'Golden Draba', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 51.5, 181, 1, 8, 7);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'utilisateur'),
(2, 'modérateur'),
(3, 'administrateur');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `dateNaissance` datetime NOT NULL,
  `numeroRue` int(11) NOT NULL,
  `rue` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `codePostal` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `dateNaissance`, `numeroRue`, `rue`, `ville`, `codePostal`, `email`, `password`) VALUES
(1, 'Gregory', 'Rawll', '1999-03-23 00:00:00', 210, 'Dorton', 'Vincennes', 5620, 'frawll0@buzzfeed.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(2, 'Evita', 'Paffett', '1991-05-09 00:00:00', 34, 'Lakeland', 'Wulipu', 6399, 'lpaffett1@creativecommons.org', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(3, 'Mischa', 'Gisby', '1998-06-28 00:00:00', 211, 'Mallory', 'Deskáti', 4352, 'cgisby2@weather.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(4, 'Willi', 'Feakins', '1999-04-20 00:00:00', 291, 'Ridgeway', 'Lagnieu', 5021, 'efeakins3@google.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(5, 'Claudelle', 'Kneale', '1989-05-09 00:00:00', 27, 'Cardinal', 'Ma’ao', 7693, 'kkneale4@com.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(6, 'Keely', 'Grimsey', '1987-08-16 00:00:00', 308, 'Jenifer', 'Camagüey', 7447, 'cgrimsey5@vkontakte.ru', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(7, 'Myer', 'Deane', '1992-11-08 00:00:00', 197, 'Melby', 'Maroanging', 2968, 'edeane6@pen.io', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(8, 'Boothe', 'Reicherz', '1992-05-09 00:00:00', 116, 'Clove', 'El Retorno', 4404, 'areicherz7@ihg.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(9, 'Caitrin', 'Cutbirth', '1997-10-15 00:00:00', 341, 'Schiller', 'Guanchao', 1605, 'kcutbirth8@admin.ch', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(10, 'Noble', 'Grigoli', '1985-04-20 00:00:00', 267, 'Warbler', 'Rosario', 3915, 'fgrigoli9@github.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(11, 'Ashlie', 'Zimmermeister', '1993-05-19 00:00:00', 124, 'Elgar', 'Quintela', 5881, 'tzimmermeistera@archive.org', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(12, 'Reilly', 'Collinson', '1984-11-09 00:00:00', 325, 'Springview', 'Polo', 5685, 'ycollinsonb@friendfeed.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(13, 'Edy', 'Ormes', '1992-06-21 00:00:00', 266, 'Huxley', 'Villa Santa Rosa', 3838, 'mormesc@themeforest.net', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(14, 'Yul', 'Marco', '1997-09-05 00:00:00', 283, 'Grim', 'Tarariras', 2531, 'mmarcod@ehow.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(15, 'Julio', 'Menaul', '1983-07-13 00:00:00', 197, 'Dovetail', 'Los Santos', 7933, 'vmenaule@ehow.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(16, 'Teodorico', 'Pow', '1989-01-30 00:00:00', 114, 'Onsgard', 'Tomaszów Mazowiecki', 7946, 'lpowf@si.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(17, 'Jennette', 'Reford', '1983-03-08 00:00:00', 350, 'Morning', 'Hamamatsu', 6427, 'drefordg@netlog.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(18, 'Christoforo', 'Allery', '1998-11-05 00:00:00', 125, 'Crest Line', 'La Condamine', 5692, 'falleryh@chron.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(19, 'Vicky', 'Salisbury', '1999-09-11 00:00:00', 246, 'Lien', 'Vestmannaeyjar', 3037, 'esalisburyi@dagondesign.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(20, 'Birgit', 'MattiCCI', '1984-11-24 00:00:00', 81, 'Russell', 'Victoria', 6439, 'rmatticcij@timesonline.co.uk', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(21, 'Vonnie', 'Robun', '1995-04-21 00:00:00', 130, 'Lillian', 'Kolape', 3828, 'lrobunk@reverbnation.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(22, 'Drugi', 'Sidwell', '1988-03-09 00:00:00', 350, 'Artisan', 'Shilaoren', 7019, 'ssidwelll@reverbnation.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(23, 'Arlina', 'Kendall', '1996-08-05 00:00:00', 243, 'Basil', 'Zheleznodorozhnyy', 2125, 'dkendallm@biglobe.ne.jp', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(24, 'Bendicty', 'Whitmore', '1982-01-08 00:00:00', 168, 'Superior', 'Sanhe', 6880, 'awhitmoren@delicious.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(25, 'Tucker', 'Meus', '1983-10-18 00:00:00', 302, 'Granby', 'Kyaka', 3758, 'tmeuso@soundcloud.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(26, 'Bernadina', 'Bosche', '1995-03-03 00:00:00', 54, 'Lake View', 'Bang Bo', 7410, 'lboschep@slate.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(27, 'Chrystal', 'Levet', '1981-08-30 00:00:00', 207, 'Merchant', 'Kadugannawa', 2788, 'mlevetq@mayoclinic.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(28, 'Amelina', 'Meadowcraft', '1996-01-08 00:00:00', 62, 'Donald', 'Kikinda', 5126, 'mmeadowcraftr@prnewswire.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(29, 'Koral', 'Shann', '1982-08-13 00:00:00', 270, 'Mallard', 'Yekimovichi', 4148, 'cshanns@accuweather.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(30, 'Rolph', 'Pilgram', '2000-03-07 00:00:00', 188, 'Blaine', 'Thap Than', 3611, 'spilgramt@amazonaws.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(31, 'Eliza', 'Cunniffe', '1987-06-06 00:00:00', 213, '8th', 'Guider', 4045, 'ocunniffeu@spotify.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(32, 'Brittan', 'Annon', '1993-04-25 00:00:00', 309, 'Farragut', 'Kaolinovo', 5828, 'sannonv@geocities.jp', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(33, 'Candida', 'Fleeming', '1983-10-22 00:00:00', 321, 'Superior', 'Mahajanga', 5062, 'ifleemingw@myspace.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(34, 'Glenda', 'Easeman', '1989-10-19 00:00:00', 265, 'Mitchell', 'Kosamphi Nakhon', 7217, 'peasemanx@parallels.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(35, 'Lewie', 'Swiggs', '1990-10-15 00:00:00', 258, 'Burning Wood', 'Yangyong', 4735, 'mswiggsy@artisteer.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(36, 'Earl', 'Batkin', '1993-12-11 00:00:00', 302, 'Manley', 'Krasnolesnyy', 4694, 'bbatkinz@un.org', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(37, 'Dwayne', 'Dello', '1987-08-02 00:00:00', 13, 'Surrey', 'Íquira', 6498, 'rdello10@illinois.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(38, 'Daniel', 'MacKaile', '1983-02-05 00:00:00', 160, 'Oriole', 'Miguel Pereira', 2343, 'tmackaile11@example.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(39, 'Teodora', 'Hullyer', '1993-05-23 00:00:00', 20, 'Jenifer', 'Beizi', 7062, 'ghullyer12@mysql.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(40, 'Tobias', 'Munns', '1986-12-08 00:00:00', 179, 'West', 'Chenôve', 3819, 'smunns13@cargocollective.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(41, 'Dannye', 'Colenutt', '1983-07-08 00:00:00', 198, 'Crownhardt', 'Bairro', 6575, 'bcolenutt14@ucsd.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(42, 'Klemens', 'Joanaud', '1998-12-15 00:00:00', 121, 'Sycamore', 'Qiziltepa Shahri', 2941, 'pjoanaud15@bloomberg.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(43, 'Corey', 'Alpin', '1981-05-23 00:00:00', 109, 'Milwaukee', 'Fortaleza', 3494, 'dalpin16@live.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(44, 'Conrado', 'Chaves', '1988-03-06 00:00:00', 294, 'Mcbride', 'J?jarm', 5310, 'achaves17@linkedin.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(45, 'Caleb', 'Carl', '2000-01-17 00:00:00', 342, 'Aberg', 'Chepes', 1150, 'pcarl18@linkedin.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(46, 'Hertha', 'Minget', '1997-05-02 00:00:00', 166, 'Maple Wood', 'Santa Ana Huista', 1509, 'zminget19@behance.net', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(47, 'Lexine', 'Ethridge', '1982-01-26 00:00:00', 187, 'American Ash', 'Memaliaj', 5461, 'aethridge1a@aol.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(48, 'Bartholemy', 'Pear', '1986-10-25 00:00:00', 226, 'Caliangt', 'P?edklášte?í', 2441, 'spear1b@mozilla.org', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(49, 'Michel', 'Blackmore', '1990-06-30 00:00:00', 19, 'Towne', 'Querecotillo', 2326, 'dblackmore1c@google.nl', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(50, 'Krystal', 'O\'Donoghue', '1985-10-23 00:00:00', 311, 'Michigan', 'Jatisari', 4008, 'sodonoghue1d@princeton.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(51, 'Billy', 'Sabati', '1987-09-04 00:00:00', 248, 'Saint Paul', 'Burlatskoye', 6890, 'csabati1e@google.com.br', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(52, 'Maggee', 'Constable', '1987-05-22 00:00:00', 150, 'Novick', 'Magay', 7858, 'cconstable1f@mtv.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(53, 'Candra', 'O\'Hern', '1985-05-06 00:00:00', 296, 'Florence', 'Amberd', 2739, 'dohern1g@netscape.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(54, 'Davon', 'Keyes', '1980-10-04 00:00:00', 282, 'Bluestem', 'Aksu', 1014, 'pkeyes1h@is.gd', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(55, 'Rebekah', 'Geator', '1988-06-24 00:00:00', 184, 'Mcbride', 'Havlí?k?v Brod', 1771, 'lgeator1i@unc.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(56, 'Katuscha', 'Whitington', '1993-09-25 00:00:00', 336, 'Pawling', 'Rizhao', 7008, 'bwhitington1j@usda.gov', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(57, 'Devina', 'Henstridge', '2000-01-29 00:00:00', 270, 'Corscot', 'Foros da Catrapona', 4965, 'ahenstridge1k@so-net.ne.jp', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(58, 'Bernardo', 'Choulerton', '1994-10-11 00:00:00', 27, 'Warner', 'Calancuasan Norte', 6281, 'achoulerton1l@alexa.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(59, 'Shayla', 'Fitzroy', '1981-12-06 00:00:00', 253, 'Maywood', 'El Gouna', 5095, 'afitzroy1m@paginegialle.it', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(60, 'Simonne', 'Stow', '1990-03-05 00:00:00', 69, 'Killdeer', 'Jadho', 2835, 'astow1n@unesco.org', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(61, 'Renata', 'Coombe', '1983-02-11 00:00:00', 142, 'Bunting', 'Tsant', 1962, 'ncoombe1o@webmd.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(62, 'Iormina', 'Mallender', '1982-10-16 00:00:00', 27, 'Gale', 'Santa Luzia', 1215, 'bmallender1p@noaa.gov', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(63, 'Annis', 'Kinnen', '1995-09-10 00:00:00', 284, 'Esker', 'Bandar-e Gan?veh', 1886, 'akinnen1q@senate.gov', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(64, 'Phyllida', 'Zotto', '1991-04-20 00:00:00', 231, 'Reinke', 'Causip', 4425, 'azotto1r@huffingtonpost.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(65, 'Bern', 'Connor', '1993-09-07 00:00:00', 40, 'Meadow Ridge', 'Fort Smith', 4715, 'cconnor1s@feedburner.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(66, 'Siffre', 'Stoak', '1993-11-25 00:00:00', 48, 'Stang', 'Chiry?', 3194, 'jstoak1t@biglobe.ne.jp', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(67, 'Marius', 'Meddings', '1984-02-23 00:00:00', 253, 'Di Loreto', 'Jiujie', 1279, 'kmeddings1u@gravatar.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(68, 'Teddi', 'Sillito', '2000-03-19 00:00:00', 109, 'International', 'Nuevo Amanecer', 5641, 'msillito1v@loc.gov', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(69, 'Gard', 'Edson', '1982-08-22 00:00:00', 93, 'Park Meadow', 'Bech', 3905, 'aedson1w@51.la', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(70, 'Chadd', 'Serginson', '1982-11-18 00:00:00', 133, 'Declaration', 'Cimo de Vila', 4226, 'cserginson1x@4shared.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(71, 'Frazer', 'Revill', '1986-11-07 00:00:00', 339, 'Gerald', 'Haugesund', 3029, 'trevill1y@dell.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(72, 'Sterling', 'Zanetello', '1993-12-07 00:00:00', 161, 'Bartelt', 'Swinford', 1118, 'azanetello1z@walmart.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(73, 'Matteo', 'Allbon', '1982-06-24 00:00:00', 136, 'Corscot', 'Xiuying', 2920, 'jallbon20@europa.eu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(74, 'Beatrisa', 'Kirmond', '1993-06-07 00:00:00', 145, 'Old Shore', 'Dob?ív', 1339, 'lkirmond21@wired.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(75, 'Fallon', 'Haythorn', '1990-04-19 00:00:00', 13, 'Porter', 'Maloco', 3274, 'ghaythorn22@ted.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(76, 'Odella', 'Britch', '1993-08-22 00:00:00', 229, 'Goodland', 'Qiawan', 5871, 'lbritch23@ucsd.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(77, 'Shirlee', 'Bendley', '1981-10-21 00:00:00', 86, 'Monica', 'Doroslovo', 6604, 'fbendley24@netvibes.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(78, 'Hillary', 'Langley', '1998-02-03 00:00:00', 300, 'Mesta', 'Lianrao', 5094, 'glangley25@unblog.fr', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(79, 'Pasquale', 'Chuney', '1993-04-15 00:00:00', 322, 'Vidon', 'Shuizhai', 3306, 'cchuney26@oakley.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(80, 'Margalit', 'Briggdale', '1982-07-19 00:00:00', 111, 'Talisman', 'Dengzhou', 7948, 'dbriggdale27@marketwatch.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(81, 'Jorrie', 'Kettell', '1994-06-10 00:00:00', 170, 'Browning', 'Kuasha', 5727, 'mkettell28@google.ca', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(82, 'Phaidra', 'Gatman', '2000-01-18 00:00:00', 127, 'Butternut', 'Jarocin', 3779, 'igatman29@chronoengine.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(83, 'Jody', 'Cornew', '1994-03-05 00:00:00', 44, 'Sloan', 'Xinan', 4817, 'ecornew2a@arstechnica.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(84, 'Levin', 'Stanex', '1999-08-01 00:00:00', 272, 'Village Green', 'Genang', 4879, 'lstanex2b@edublogs.org', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(85, 'Geralda', 'Matysik', '1987-08-08 00:00:00', 239, 'Vermont', 'Barrancabermeja', 6230, 'tmatysik2c@gov.uk', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(86, 'Richie', 'Grigsby', '1988-11-25 00:00:00', 232, 'Dahle', 'Lokorae', 7597, 'egrigsby2d@imageshack.us', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(87, 'Chan', 'Arthars', '1987-10-12 00:00:00', 23, 'American', 'Linpu', 5883, 'qarthars2e@harvard.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(88, 'Sharity', 'Lorkings', '1988-05-25 00:00:00', 101, 'Tomscot', 'La Tebaida', 2050, 'jlorkings2f@w3.org', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(89, 'Sara-ann', 'Champney', '1981-01-11 00:00:00', 185, 'Rutledge', 'Kurashiki', 7640, 'lchampney2g@nymag.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(90, 'Tersina', 'Otteridge', '1990-04-08 00:00:00', 321, 'Pleasure', 'København', 3221, 'motteridge2h@sciencedaily.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(91, 'Sibby', 'Finnigan', '1985-04-18 00:00:00', 347, 'Main', 'Kuala Terengganu', 7282, 'lfinnigan2i@deviantart.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(92, 'Ludwig', 'Restill', '1986-08-17 00:00:00', 35, 'Bonner', 'Banjar Peguyangan', 5946, 'lrestill2j@google.co.uk', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(93, 'Rennie', 'Caghy', '1983-09-12 00:00:00', 178, 'Merry', 'Leipzig', 6295, 'rcaghy2k@mit.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(94, 'Kali', 'Edeson', '1998-04-17 00:00:00', 84, 'Darwin', 'Belén de Umbría', 3444, 'ledeson2l@blogger.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(95, 'Lucinda', 'Climie', '1986-03-13 00:00:00', 84, 'Dryden', 'Luqiao', 1381, 'eclimie2m@mashable.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(96, 'Stinky', 'Mabbett', '1986-08-11 00:00:00', 22, 'Roxbury', 'Saint-Denis', 6969, 'pmabbett2n@networksolutions.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(97, 'Riobard', 'Brownhill', '1999-09-09 00:00:00', 181, 'Mccormick', 'Malimaneek', 3670, 'abrownhill2o@msn.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(98, 'Keane', 'Dowdney', '1995-01-01 00:00:00', 118, 'Fremont', 'Lokolande', 3096, 'fdowdney2p@ycombinator.com', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(99, 'Annamarie', 'Gartrell', '1987-07-10 00:00:00', 140, 'Blackbird', 'Sérvia', 2772, 'hgartrell2q@ocn.ne.jp', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK'),
(100, 'Sherrie', 'Scotting', '1990-06-27 00:00:00', 316, 'Forest Run', 'Yampil’', 7850, 'escotting2r@umich.edu', '$2b$10$W9mmzmjkvUDl8cMftz7tSOhePUtAC3Sk1KLtZs4MmgFzq0/6Hh/sK');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateurs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `clients_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `entrepreneurs`
--
ALTER TABLE `entrepreneurs`
  ADD CONSTRAINT `entrepreneurs_ibfk_1` FOREIGN KEY (`utilisateurId`) REFERENCES `utilisateurs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `lignecommandes`
--
ALTER TABLE `lignecommandes`
  ADD CONSTRAINT `lignecommandes_ibfk_1` FOREIGN KEY (`commandeId`) REFERENCES `commandes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `lignecommandes_ibfk_2` FOREIGN KEY (`produitId`) REFERENCES `produits` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `livraisons`
--
ALTER TABLE `livraisons`
  ADD CONSTRAINT `livraisons_ibfk_1` FOREIGN KEY (`commandeId`) REFERENCES `commandes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`categorieId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `produits_ibfk_2` FOREIGN KEY (`entrepreneurId`) REFERENCES `entrepreneurs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
