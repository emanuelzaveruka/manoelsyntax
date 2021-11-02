-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ManoelSyntax
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ManoelSyntax
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ManoelSyntax` DEFAULT CHARACTER SET utf8mb4 ;
USE `ManoelSyntax` ;

-- -----------------------------------------------------
-- Table `linguagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `linguagem` (
  `id_linguagem` INT NOT NULL,
  `nome` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`id_linguagem`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `comando`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comando` (
  `id_comando` INT NOT NULL,
  `texto` VARCHAR(2000) NOT NULL,
  `linguagem_id_linguagem` INT NOT NULL,
  PRIMARY KEY (`id_comando`),
  INDEX `fk_comando_linguagem_idx` (`linguagem_id_linguagem` ASC) VISIBLE,
  CONSTRAINT `fk_comando_linguagem`
    FOREIGN KEY (`linguagem_id_linguagem`)
    REFERENCES `linguagem` (`id_linguagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;