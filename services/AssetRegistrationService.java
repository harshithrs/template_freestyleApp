import java.util.Date;

public class AssetRegistrationService {

  public void addAsset(String assetNumber, String name, String specifications, Date purchaseDate, double purchasePrice) {
    if (isValidAssetNumber(assetNumber) && isValidName(name) && isValidSpecifications(specifications) && isValidPurchaseDate(purchaseDate) && isValidPurchasePrice(purchasePrice)) {
      saveAsset(assetNumber, name, specifications, purchaseDate, purchasePrice);
    } else {
      throw new IllegalArgumentException("Invalid asset information");
    }
  }

  private boolean isValidAssetNumber(String assetNumber) {
    // Add validation logic for the asset number
    // Return true if the asset number is valid, otherwise return false
    return assetNumber != null && !assetNumber.isEmpty();
  }

  private boolean isValidName(String name) {
    // Add validation logic for the name
    // Return true if the name is valid, otherwise return false
    return name != null && !name.isEmpty();
  }

  private boolean isValidSpecifications(String specifications) {
    // Add validation logic for the specifications
    // Return true if the specifications are valid, otherwise return false
    return specifications != null && !specifications.isEmpty();
  }

  private boolean isValidPurchaseDate(Date purchaseDate) {
    // Add validation logic for the purchase date
    // Return true if the purchase date is valid, otherwise return false
    return purchaseDate != null;
  }

  private boolean isValidPurchasePrice(double purchasePrice) {
    // Add validation logic for the purchase price
    // Return true if the purchase price is valid, otherwise return false
    return purchasePrice > 0;
  }

  private void saveAsset(String assetNumber, String name, String specifications, Date purchaseDate, double purchasePrice) {
    // Add logic to save the asset information to the database or file system
    System.out.println("Asset saved successfully");
  }
}