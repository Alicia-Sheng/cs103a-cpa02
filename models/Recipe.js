'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

var recipeSchema = Schema( {
    title: String,
    instructions: Mixed,
    fsalights: Mixed,
    healthiness: Number,
    ingredients: Mixed,
    nutrvalues: Mixed,
    url: String,
} );

module.exports = mongoose.model( 'Recipe', recipeSchema );
