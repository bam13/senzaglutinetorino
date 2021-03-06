 function drawInfobox(category, infoboxContent, json, i){

    if(json.data[i].color)          { var color = json.data[i].color }
        else                        { color = '' }
    if( json.data[i].price )        { var price = '<div class="price">' + json.data[i].price +  '</div>' }
        else                        { price = '' }
    if(json.data[i].id)             { var id = json.data[i].id }
        else                        { id = '' }
    if(json.data[i].telefono)       { var telefono = json.data[i].telefono }
        else                        { telefono = '' }
    if(json.data[i].orari)          { var orari = json.data[i].orari }
        else                        { orari = '' }
    if(json.data[i].ritiro)         { var ritiro = json.data[i].ritiro }
        else                        { ritiro = '' }
    if(json.data[i].buoni)          { var buoni = json.data[i].buoni }
        else                        { buoni = '' }
    if(json.data[i].consegna)       { var consegna = json.data[i].consegna }
        else                        { consegna = '' }
    if(json.data[i].type)           { var type = json.data[i].type }
        else                        { type = '' }
    if(json.data[i].title)          { var title = json.data[i].title }
        else                        { title = '' }
    if(json.data[i].location)       { var location = json.data[i].location }
        else                        { location = '' }
    if(json.data[i].gallery[0])     { var gallery = json.data[i].gallery[0] }
        else                        { gallery[0] = '../img/default-item.jpg' }

    var ibContent = '';
    ibContent =
    '<div class="infobox ' + color + '">' +
        '<div class="inner">' +
            '<div class="image">' +
                '<div class="item-specific">' + drawItemSpecific(category, json, i) + '</div>' +
                '<div id="pano" class="preview-gallery">' +
                //'<img src="' + gallery +  '">' +
                '</div>' +
                 '<h2 class="title">' +
                     '<div>' + title +  '</div>' +
                     '<div><i class="fa fa-truck"></i> PANE FRESCO: '  + consegna + ' </div>' +
                 '</h2>' +
                    '<div class="meta">' +
                        '<p><i class="fa fa-map-marker"></i>' + location +  '</p>' +
                        '<p><i class="fa fa-credit-card"></i> ACCETTA BUONI ASL: ' + buoni +  '</p>' +
                        '<p><i class="fa fa-clock-o"></i> ORARI DI APERTURA</p>' +
                        '<article class="tab-orari">' + orari +  '</article>' +
                        '<p><i class="fa fa-phone"></i> NEGOZIO: <a href="tel:' + telefono + '">' + telefono + '</a></p>' +
                   '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

    return ibContent;
}