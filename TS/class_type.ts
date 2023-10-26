import { Type } from '@angular/core';

function one<T>(type: Type<T>) {}

// equivalent:

function two<T>(type: { new(): T }) {}
