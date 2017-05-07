describe('MagentoParser', function() {
  var MagentoParser;
  // really sorry for the mess of these specs
  var singleHtml = `<div class="title hidden-xs">
                                    <div class="col-xs-12 col-sm-4">Certification Held</div>
                    <div class="col-xs-12 col-sm-4">Prometric Registration #</div>
                    <div class="col-xs-12 col-sm-4">Date Certified</div>
                                <div class="clear"></div>
            </div>
                            <div class="odd hidden-xs">
                                            <div class="col-xs-12 col-sm-4">
                            Developer                        </div>
                        <div class="col-xs-12 col-sm-4">
                            yf9dus5130                        </div>
                        <div class="col-xs-12 col-sm-4">
                            07/11/2014                        </div>
                                        <div class="clear"></div>
                </div>
                <div class="visible-xs row-xs">
                    <div class="title row">
                        <div class="col-xs-6">Certification Held</div>
                        <div class="col-xs-6 title-xs">
                            Developer                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="odd row">
                        <div class="col-xs-6 title-xs">Prometric Registration #</div>
                        <div class="col-xs-6">
                            yf9dus5130                        </div>
                    </div>
                    <div class="even row">
                        <div class="col-xs-6 title-xs">Date Certified</div>
                        <div class="col-xs-6">
                            07/11/2014                        </div>
                    </div>
                                    </div>`

  var doubleHtml = `
            <div class="title hidden-xs">
                                    <div class="col-xs-12 col-sm-4">Certification Held</div>
                    <div class="col-xs-12 col-sm-4">Prometric Registration #</div>
                    <div class="col-xs-12 col-sm-4">Date Certified</div>
                                <div class="clear"></div>
            </div>
                            <div class="odd hidden-xs">
                                            <div class="col-xs-12 col-sm-4">
                            Developer                        </div>
                        <div class="col-xs-12 col-sm-4">
                            vd0dus50f6                        </div>
                        <div class="col-xs-12 col-sm-4">
                            05/04/2012                        </div>
                                        <div class="clear"></div>
                </div>
                <div class="visible-xs row-xs">
                    <div class="title row">
                        <div class="col-xs-6">Certification Held</div>
                        <div class="col-xs-6 title-xs">
                            Developer                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="odd row">
                        <div class="col-xs-6 title-xs">Prometric Registration #</div>
                        <div class="col-xs-6">
                            vd0dus50f6                        </div>
                    </div>
                    <div class="even row">
                        <div class="col-xs-6 title-xs">Date Certified</div>
                        <div class="col-xs-6">
                            05/04/2012                        </div>
                    </div>
                                    </div>
                            <div class="even hidden-xs">
                                            <div class="col-xs-12 col-sm-4">
                            Developer Plus                        </div>
                        <div class="col-xs-12 col-sm-4">
                            w9cdus505c                        </div>
                        <div class="col-xs-12 col-sm-4">
                            11/27/2012                        </div>
                                        <div class="clear"></div>
                </div>
                <div class="visible-xs row-xs">
                    <div class="title row">
                        <div class="col-xs-6">Certification Held</div>
                        <div class="col-xs-6 title-xs">
                            Developer Plus                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="odd row">
                        <div class="col-xs-6 title-xs">Prometric Registration #</div>
                        <div class="col-xs-6">
                            w9cdus505c                        </div>
                    </div>
                    <div class="even row">
                        <div class="col-xs-6 title-xs">Date Certified</div>
                        <div class="col-xs-6">
                            11/27/2012                        </div>
                    </div>
                                    </div>`;

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(angular.mock.module('accredible'));

  beforeEach(inject(function(_MagentoParser_) {
    MagentoParser = _MagentoParser_;
  }));

  describe('able to find correct details in double certificate table', function() {
    it('provides correct details', function() {
      var credentials = MagentoParser.parse(doubleHtml, 'http://magento.com');
      expect(credentials.length).toEqual(2);
      expect(credentials[0].id).toEqual('vd0dus50f6');
      expect(credentials[0].date).toEqual('May 4, 2012');
      expect(credentials[0].name).toEqual('Developer');
      expect(credentials[1].id).toEqual('w9cdus505c');
      expect(credentials[1].date).toEqual('Nov 27, 2012');
      expect(credentials[1].name).toEqual('Developer Plus');
    });
  });

  describe('able to find correct details in single certificate table', function() {
    it('able to find correct details in double certificate table', function() {
      var credentials = MagentoParser.parse(singleHtml, 'http://magento.com');
      expect(credentials.length).toEqual(1);
      expect(credentials[0].id).toEqual('yf9dus5130');
      expect(credentials[0].date).toEqual('Jul 11, 2014');
      expect(credentials[0].name).toEqual('Developer');
    });
  });

});