
<br><a name="module_grunt-call-grunt/options/callnpm"></a>

## grunt-call-grunt/options/callnpm
> options/callnpm.js: grunt-call-grunt


* [grunt-call-grunt/options/callnpm](#module_grunt-call-grunt/options/callnpm)
    * [~getArguments()](#module_grunt-call-grunt/options/callnpm..getArguments) ⇒ <code>Object</code>
    * [~getOptions()](#module_grunt-call-grunt/options/callnpm..getOptions) ⇒ <code>Object</code>
    * [~getTaskOptions(task)](#module_grunt-call-grunt/options/callnpm..getTaskOptions) ⇒ <code>Object</code>
    * [~toArgs(grunt, task)](#module_grunt-call-grunt/options/callnpm..toArgs) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>


<br><a name="module_grunt-call-grunt/options/callnpm..getArguments"></a>

### grunt-call-grunt/options/callnpm~getArguments() ⇒ <code>Object</code>
> Defines and returns the set of options that is passed to task 'check_outdated'.

**Returns**: <code>Object</code> - call_npm default arguments  

<br><a name="module_grunt-call-grunt/options/callnpm..getOptions"></a>

### grunt-call-grunt/options/callnpm~getOptions() ⇒ <code>Object</code>
> Defines and returns the set of options that is passed to task 'check_outdated'.

**Returns**: <code>Object</code> - call_npm default options  

<br><a name="module_grunt-call-grunt/options/callnpm..getTaskOptions"></a>

### grunt-call-grunt/options/callnpm~getTaskOptions(task) ⇒ <code>Object</code>
> Returns grunt task specific options for 'call_npm'.>  Note: 'call_npm' default options and configuration>        options have already been merged!

**Returns**: <code>Object</code> - 'call_npm' options for grunt task  

| Param | Type |
| --- | --- |
| task | <code>grunt.task</code> | 


<br><a name="module_grunt-call-grunt/options/callnpm..toArgs"></a>

### grunt-call-grunt/options/callnpm~toArgs(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
> Convert grunt task specific options for 'call_npm' to an >  array of arguments, which will be used for calling npm.

**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 

