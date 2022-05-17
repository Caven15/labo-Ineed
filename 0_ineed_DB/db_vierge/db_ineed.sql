-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : mar. 17 mai 2022 à 01:07
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
  `categorie` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `entrepreneurs`
--

INSERT INTO `entrepreneurs` (`id`, `nomE`, `numeroRueE`, `rueE`, `villeE`, `codePostalE`, `createdAt`, `updatedAt`, `utilisateurId`) VALUES
(1, 'tech', 15, 'rue du code', 'eccaussinnes', 7190, '2022-05-17 03:02:38', '2022-05-17 03:02:38', 3);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `livraisons`
--

DROP TABLE IF EXISTS `livraisons`;
CREATE TABLE IF NOT EXISTS `livraisons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numeroRue` int(11) NOT NULL,
  `rue` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `codePostal` int(11) NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `commandeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `commandeId` (`commandeId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `prix` double NOT NULL,
  `quantite` int(11) NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `categorieId` int(11) DEFAULT NULL,
  `entrepreneurId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categorieId` (`categorieId`),
  KEY `entrepreneurId` (`entrepreneurId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `dateNaissance`, `numeroRue`, `rue`, `ville`, `codePostal`, `email`, `password`) VALUES
(1, 'claes', 'alexandre', '1990-03-15 02:00:00', 15, 'rue du code', 'eccaussinnes', 7190, 'azezezerrzeaze@gmail.com', '$2b$10$4v0vU.d0PNuq03CDaI1UyeZPUYsdBJj2JMRhXvXHgkzAtHR.zXQre'),
(2, 'claes', 'alexandre', '1990-03-15 02:00:00', 15, 'rue du code', 'eccaussinnes', 7190, 'azezeqsdqczerrzeazgdq@gmail.com', '$2b$10$ITniickqAQBTjuGKWcDtauSpIp7yrZTEVTJ34h9cQPZH3tONq3wqq'),
(3, 'claes', 'alexandre', '1990-03-15 02:00:00', 15, 'rue du code', 'eccaussinnes', 7190, 'aze@gmail.com', '$2b$10$iwx.UkMMtizsTpow2n6pJ.BqehDhP6x3Ra4AX8lMyoN.lbmgmbgZm');

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
