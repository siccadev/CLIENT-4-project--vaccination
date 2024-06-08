<TouchableOpacity style={styles.link} onPress={() => setIsComptesOpen(!isComptesOpen)}>
        <Text style={styles.linkText}>Gestion comptes</Text>
        {isComptesOpen && (
          <View style={styles.subItemsContainer}>
            <TouchableOpacity style={styles.subItem} onPress={() => props.navigation.navigate('ComptesParents')}>
              <Text style={styles.subItemText}>Comptes parents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subItem} onPress={() => props.navigation.navigate('ComptesMedecins')}>
              <Text style={styles.subItemText}>Comptes médecins</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>


const [isComptesOpen, setIsComptesOpen] = React.useState(false);