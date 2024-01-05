import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class AssetRegistrationController {

  private AssetRegistrationService assetRegistrationService;

  public AssetRegistrationController(AssetRegistrationService assetRegistrationService) {
    this.assetRegistrationService = assetRegistrationService;
  }

  public void addAsset(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String assetNumber = request.getParameter("assetNumber");
    String name = request.getParameter("name");
    String specifications = request.getParameter("specifications");
    String purchaseDateStr = request.getParameter("purchaseDate");
    String purchasePriceStr = request.getParameter("purchasePrice");

    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    Date purchaseDate = null;
    double purchasePrice = 0.0;

    try {
      purchaseDate = dateFormat.parse(purchaseDateStr);
      purchasePrice = Double.parseDouble(purchasePriceStr);
    } catch (ParseException e) {
      response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid date or price format");
      return;
    }

    assetRegistrationService.addAsset(assetNumber, name, specifications, purchaseDate, purchasePrice);

    response.setStatus(HttpServletResponse.SC_OK);
    response.getWriter().write("Asset registration successful");
  }
}