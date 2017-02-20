## angular2 off click

angular2 off click module with aot support.

## installation 
npm install angular2-off-click --save

## Usage
Import offClickModule

```[typescript]
    import { OffClickModule } from 'angular2-off-click';
    
    @NgModule({
        imports: [
            OffClickModule,
            ...
    })
```

Template

```[html]
    <div (offClick)="callback($event)"></div>
```

## dependencies
angular two