"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setNPages = function (pages) {
        this.nPages = pages;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.toString1 = function () {
        return "Title - " + this.getTitle() + "\n" + "Number of pages - " + this.getNPages() + "\n" + "ISBN - " + this.getIsbn() + "\n"
            + "Author - " + this.getAuthor() + "\n" + "Editorial - " + this.getEditorial();
    };
    return Book;
}());
exports.Book = Book;
