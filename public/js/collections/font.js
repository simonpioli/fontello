var Fontomas = (function (Fontomas) {
  "use strict";

  var app = Fontomas.app,
    Backbone = window.Backbone;

  app.collections.Font = Backbone.Collection.extend({
    model: app.models.Font,

    parseId: function (pair_id) {
      var pair = pair_id.split("-"),
        result = {font_id: pair[0], glyph_id: pair[1]};
      return result;
    },

    getFont: function (pair_id) {
      var pair = this.parseId(pair_id),
        font = this.get(pair.font_id);
      return font.get("font");
    },

    getGlyph: function (pair_id) {
      var pair = this.parseId(pair_id),
        font = this.get(pair.font_id),
        glyph = font.get("font").glyphs[pair.glyph_id];
      return glyph;
    }
  });

  return Fontomas;
}(Fontomas || {}));
